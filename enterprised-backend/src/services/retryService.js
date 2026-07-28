export async function retry(fn, retries = 3, delay = 2000) {
  let lastError;

  for (let i = 1; i <= retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;

      if (err.status === 503 && i < retries) {
        console.log(`Retry ${i}/${retries}`);
        await new Promise(r => setTimeout(r, delay));
        continue;
      }

      throw err;
    }
  }

  throw lastError;
}