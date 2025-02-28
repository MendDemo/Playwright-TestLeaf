/**
 * Fix with AI attachment to failed Playwright tests.
 */
import fs from 'node:fs';
import { Page, TestInfo, TestInfoError } from '@playwright/test';
// @ts-ignore
import { parseStackTraceLine } from 'playwright-core/lib/utilsBundle';

const promptTemplate = `
I hope You are an expert in Playwright testing. 
Fix the error in the Playwright test "{title}". 
- Provide response as a diff highlighted code snippet.
- Strictly rely on the ARIA snapshot of the page.
- Avoid adding any new code.
- Avoid adding comments to the code.
- Avoid changing the test logic.
- Use only role-based locators: getByRole, getByLabel, etc.
- For 'heading' role try to adjust the level first.
- Add a concise note about applied changes.
- If the test may be correct and there is a bug in the page, note it.


{error}

Code snippet of the failing test:

{snippet}

ARIA snapshot of the page:

{ariaSnapshot}
`;

//attaching the prompt
export async function attachFixWithAI(page: Page, testInfo: TestInfo) {
  const willBeRetried = testInfo.retry < testInfo.project.retries;
  if (testInfo.error && !willBeRetried) {
    const prompt = buildPrompt({
      title: testInfo.title,
      error: testInfo.error,
      ariaSnapshot: await page.locator('html').ariaSnapshot(),
    });
    await testInfo.attach(`🤖 Don't worry!, Try to Fix with AI: copy prompt and paste to AI chat`, { body: prompt });
  }
}

//building prompt with Error, Code snippet, ARIA snapshot of the page
function buildPrompt({ title, error, ariaSnapshot }: { 
    title: string, 
    error: TestInfoError, 
    ariaSnapshot: string
}) {
  const errorMessage = stripAnsiEscapes(error.message || '');
  const snippet = getCodeSnippet(error);

  if (!errorMessage || !snippet) return '';

  return promptTemplate
    .replace('{title}', title)
    .replace('{error}', errorMessage)
    .replace('{snippet}', snippet)
    .replace('{ariaSnapshot}', ariaSnapshot)
    .trim();
}


function stripAnsiEscapes(str: string): string {
  // eslint-disable-next-line max-len, no-control-regex
  const ansiRegex = new RegExp('([\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~])))','g');
  return str.replace(ansiRegex, '');
}


function getCodeSnippet(error: TestInfoError) {
  const location = getErrorLocation(error);
  if (!location?.file || !location.line) return;

  try {
    const source = fs.readFileSync(location.file, 'utf8');
    const lines = source.split('\n');
    return lines.slice(location.line - 3, location.line + 4).join('\n');
  } catch (e) {
    // Failed to read the source file 
  }
}
  
function getErrorLocation(error: TestInfoError) {
  const lines = (error.stack || '').split('\n');
  let firstStackLine = lines.findIndex(line => line.startsWith('    at '));
  if (firstStackLine === -1) firstStackLine = lines.length;
  const stackLines = lines.slice(firstStackLine);
  for (const line of stackLines) {
    const frame = parseStackTraceLine(line);
    if (!frame || !frame.file || frame.file.includes(`node_modules`)) continue;
    return { file: frame.file, column: frame.column || 0, line: frame.line || 0 };
  }
}
