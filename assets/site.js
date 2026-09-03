(function () {
  const host = window.location.hostname;
  const account = host.endsWith('.github.io') ? host.slice(0, -10) : '';
  const repo = document.documentElement.dataset.repo || 'kurotools-support';
  const issueUrl = account
    ? `https://github.com/${account}/${repo}/issues/new/choose`
    : '#reporting';
  document.querySelectorAll('[data-issue-link]').forEach((link) => {
    link.href = issueUrl;
  });
  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}());
