<p align="center">
  <img src="https://avatars.githubusercontent.com/u/88053790" alt="logo" height="150"/>
</p>
<h3 align="center">
  Hey Linda
</h3>
<p align="center">
  The open source and free meditation app alternative for everyone. <br />Built with React Native and Expo.
</p>

<p align="center">
  <a href="https://x.com/icookandcode" target="_blank">Need help building your meditation app? Connect with Adrian on X 🚀 
</a>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/3059371/153682336-44a93448-7630-4103-9a3b-b5109acdafca.jpg" alt="banner" />
</p>

## Features

- meditate
- track progress
- dark mode
- current streak
- calendar activity
- time listened
- offline support
- manually enter meditation

## Install

- [Web](https://webheylinda.netlify.app/)
- [Android (beta)](https://play.google.com/store/apps/details?id=com.meditation.heylinda)
- Coming soon for iOS

## Install (dev)

To install the project, navigate to the directory and run:

- `yarn global add expo-cli`
- `yarn install`

## Run

To run the project, run the following commands:

- `yarn android`
- `yarn ios`

## Environment variables

This project uses build-time environment injection for configuration. For local development you can create a `.env` file at the project root (this file is ignored by git).

1. Copy the example file:

```bash
cp .env.example .env
```

2. Edit `.env` and set your values, for example:

```env
API_URL=https://staging.example.com
AMPLITUDE_API_KEY=your_amplitude_key_here
```

3. Start the dev server. `app.config.js` will load `.env` and inject the values into the Expo config:

```bash
npx expo start
```

For production builds, don't commit secrets to the repo. Use EAS secrets or your CI's secret management and ensure the corresponding env vars are available during the build. Example with EAS:

```bash
eas secret:create --name API_URL --value https://api.yourdomain.com
eas secret:create --name AMPLITUDE_API_KEY --value <your_key>
```

## Contribute

You can contribute to Hey Linda by beta testing, recording meditations, or submitting code.

See the [contribution guide](CONTRIBUTING.md) for more info.

## Join Us On

<a href="https://join.slack.com/t/heylinda/shared_invite/zt-1262koff6-1D7BjNHbFgRhR5FKJoCF0g"><img src="docs/images/logos/slack.gif" height="50px"/></a>
<a href="https://www.facebook.com/heylindabot"><img src="docs/images/logos/facebook.png" height="50px"/></a>
<a href="https://twitter.com/heylinda_app"><img
src="docs/images/logos/twitter.png" height="50px"/></a>
<a href="https://www.instagram.com/heylinda.app/"><img src="docs/images/logos/instagram.jpg" height="50px"/></a>

## Credits

### Github Contributors

Thanks to these awesome contributors and many more! 🧘

[![](https://github.com/trentmercer.png?size=50)](https://github.com/trentmercer)
[![](https://github.com/watadarkstar.png?size=50)](https://github.com/watadarkstar)
[![](https://github.com/AliNisarAhmed.png?size=50)](https://github.com/AliNisarAhmed)
[![](https://github.com/lsmacedo.png?size=50)](https://github.com/lsmacedo)
[![](https://github.com/alexandrvicente.png?size=50)](https://github.com/alexandrvicente)
[![](https://github.com/pedpess.png?size=50)](https://github.com/pedpess)
[![](https://github.com/orama254.png?size=50)](https://github.com/orama254)
[![](https://github.com/Kevan-Y.png?size=50)](https://github.com/Kevan-Y)

### Sponsors

Thank you to all our sponsors! 🥇

<a href="https://opencollective.com/heylinda/sponsor/0/website" target="_blank"><img src="https://opencollective.com/heylinda/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/heylinda/sponsor/1/website" target="_blank"><img src="https://opencollective.com/heylinda/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/heylinda/sponsor/2/website" target="_blank"><img src="https://opencollective.com/heylinda/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/heylinda/sponsor/3/website" target="_blank"><img src="https://opencollective.com/heylinda/sponsor/3/avatar.svg"></a>

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
</a>

### Backers

Thank you to all our backers! 🙏

<a href="https://opencollective.com/heylinda#backers" target="_blank"><img src="https://opencollective.com/heylinda/backers.svg?width=890"></a>

## License

- [GGNU Affero General Public License v3.0](https://github.com/heylinda/heylinda-app/blob/main/LICENSE)
- [Meditation
  Contributors](https://github.com/heylinda/heylinda-app/blob/main/MEDITATIONS)

---

<div align="center">

**Ready to build a meditation app at scale?**

⭐ **Star this repo** • 💬 **[Contact Adrian to Build It](https://x.com/icookandcode)**

_Built with ❤️ by [Adrian](https://x.com/icookandcode)_

</div>

---

**Keywords:** react-native, react, meditation, typescript, heylinda-app
