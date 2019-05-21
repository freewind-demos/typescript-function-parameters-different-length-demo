type VisitOptions = {
  timeout: number
}

function visit(url: string, options: Partial<VisitOptions>): void;
function visit(options: Partial<VisitOptions> & { url: string }): void;
function visit(...params: any): void {
  let finalOptions: Partial<VisitOptions> & { url: string };
  if (params.length === 1) {
    finalOptions = params[0];
  } else {
    const [url, options] = params;
    finalOptions = {
      url,
      ...options
    }
  }
  console.log(finalOptions);
}

visit('http://localhost', {timeout: 100});
visit({
  url: 'http://localhost',
  timeout: 100
});

