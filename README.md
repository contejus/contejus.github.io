# contejus.github.io

[Gatsby on Windows installation steps](https://www.gatsbyjs.org/docs/gatsby-on-windows/)

[Bootstrap Icon Library](https://icons.getbootstrap.com/)

[Bulma](https://bulma.io/)

[Sass Setup](https://sass-lang.com/install)

[locationAPI](https://tm-location-4hhy.onrender.com/)

## Installation steps

This project was initially developed using Node.js + Gatsby on Windows. However, development is mostly on my Debian WSL 2 implementation to avoid having to install the 7 GB+ Visual C++ Build Tools used by `gatsby-image-sharp`(?) and `node-sass`(?). 

1. Install Gatsby using `npm install -g gatsby-cli`

2. Cd into repository root (this dir should contain a package.json file when running `ls`)

3. Run `npm install` and `npm upgrade`

4. To run locally, enter `gatsby develop` or `npm run develop`

5. To deploy to production, enter `npm run deploy`

## To-Do

1. ~Migrate from `node-sass` to `sass` (dart-sass) to avoid having to install Visual C++ Build Tools~

2. Add CMS for build-time rendering of page content (Strapi/Ghost)

3. ~Figure out alternative to API key client-side storage~

4. ~Better credential storage for DRF API~

5. Blog feature/~League stats tracker~

6. Code refactoring (lol)
