# Publish the website on GitHub Pages

These files contain the working website from this conversation. The later Executive Blue design image is a concept and is not the implemented site.

## Option A: upload the ready-built website

1. Extract `NextV-github-pages.zip` on your computer.
2. Upload the contents (not the enclosing folder or ZIP) to the root of a GitHub repository, such as `Mostafa-heidari/NextV`. Include `index.html`, the `assets` folder, `portrait-000.png`, and `.nojekyll`.
3. Commit the files to `main`.
4. In the repository, open **Settings → Pages**.
5. Select **Deploy from a branch**, branch **main**, folder **/ (root)**, and save.
6. Wait for the Pages deployment to finish. The expected address for this repository is `https://mostafa-heidari.github.io/NextV/`. Use the URL shown in Settings → Pages.

## Option B: upload editable source with automatic builds

1. Extract `NextV-source.zip` and upload its contents to the repository root. Include the `.github/workflows/pages.yml` file; GitHub's web uploader may require adding hidden folders separately, or use Git to upload all files.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Push to `main`, or manually run **Deploy website to GitHub Pages** from the **Actions** tab.
4. The workflow installs dependencies, builds the site, and publishes the generated `dist` folder.

Use one option at a time. Do not upload `node_modules` or the private résumé PDF. The packages include the public portrait, biography, and email address shown on the website.

## Develop locally

With Node.js 24 installed:

```sh
npm ci
npm run dev
```

Run `npm run build` to generate `dist`. Relative asset paths support GitHub Pages repository subpaths and custom domains.
