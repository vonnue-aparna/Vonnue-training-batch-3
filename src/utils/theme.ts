export function setupTheme() {
    let theme: string = localStorage.getItem('theme') || 'light';
    const documentElement = document.documentElement
    if(theme) {
        documentElement.dataset.theme = theme
    }
    const themeButton = document.querySelector('#theme') as HTMLButtonElement;
    themeButton?.addEventListener('click', () => {
        theme = documentElement.dataset.theme as string;
        if (theme == 'light') {
            documentElement.dataset.theme = 'dark';
            localStorage.setItem('theme','dark')
        }
        if (theme == 'dark') {
            documentElement.dataset.theme = 'light';
            localStorage.setItem('theme','light')
        }
    })

}