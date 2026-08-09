# Huko Consults Website

This is a static Next.js website for Huko Consults. It does not contain a database or a custom backend.

## Run the website

```powershell
npm install
npm run dev
```

Open the local address shown in the terminal.

## Build for Namecheap

```powershell
npm run build
```

The finished website files are created in the `out` folder. Upload the contents of that folder to Namecheap's `public_html` folder.

## Contact form

The form uses FormSubmit to deliver messages to `hukoconsults@gmail.com` without a backend. The first submitted form requires email activation from FormSubmit.

For a complete beginner guide, read `HukoConsults_Beginner_Guide.docx`.
