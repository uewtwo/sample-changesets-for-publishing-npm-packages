# Example App

This is a sample application that demonstrates how to use the packages from GitHub Package Registry.

## Setup

1. Create a Personal Access Token (PAT) on GitHub with `read:packages` permission
2. Create a `.npmrc` file in the root directory with:

```
@uewtwo:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

3. Install dependencies:
```bash
npm install
```

4. Build and run:
```bash
npm run dev
```

## Usage

The app demonstrates:
- Importing and using functions from `@uewtwo/sample1`
- Importing and using functions from `@uewtwo/sample2`
- How `@uewtwo/sample2` depends on `@uewtwo/sample1`