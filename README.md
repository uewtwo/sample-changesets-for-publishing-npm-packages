# Changesets Monorepo Sample

This is a sample monorepo demonstrating how to use Changesets for version management and publishing npm packages to GitHub Package Registry.

## Structure

```
.
├── packages/
│   ├── sample1/          # @uewtwo/sample1 package
│   └── sample2/          # @uewtwo/sample2 package (depends on sample1)
├── apps/
│   └── example-app/      # Example application using both packages
└── .github/
    └── workflows/
        ├── ci.yml        # CI workflow for testing
        └── release.yml   # Release workflow with changesets
```

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build all packages:
   ```bash
   npm run build
   ```

## Using Changesets

### Adding a changeset

When you make changes to packages, create a changeset:

```bash
npm run changeset
```

Follow the prompts to:
1. Select which packages have changed
2. Choose the version bump type (patch/minor/major)
3. Write a summary of the changes

### Versioning and Publishing

The GitHub Actions workflow automatically:
1. Creates a "Version Packages" PR when changesets are added
2. Updates package versions based on changesets
3. Publishes to GitHub Package Registry when the PR is merged

### Manual Publishing

To manually version and publish:

```bash
# Update versions based on changesets
npm run version

# Build and publish to registry
npm run release
```

## GitHub Actions Workflows

### CI Workflow (`ci.yml`)
- Runs on all pushes and PRs
- Builds all packages
- Runs tests

### Release Workflow (`release.yml`)
- Runs on pushes to main branch
- Creates/updates a Version Packages PR
- Publishes packages when PR is merged

## Configuration

### Required GitHub Secrets
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

### Package Registry Configuration
- Packages are configured to publish to GitHub Package Registry
- Set `NODE_AUTH_TOKEN` environment variable for authentication
- `.npmrc` file configures the registry for @uewtwo scope

## Working with the Example App

The example app in `apps/example-app` demonstrates how to consume the published packages:

1. Set up authentication (see example-app/README.md)
2. Install packages from GitHub Registry
3. Build and run the example

## Development Workflow

1. Make changes to packages
2. Run `npm run changeset` to document changes
3. Push changes and create a PR
4. CI workflow runs tests
5. Merge PR to main
6. Release workflow creates Version Packages PR
7. Merge Version Packages PR to publish

## Package Dependencies

- `@uewtwo/sample2` depends on `@uewtwo/sample1`
- Both packages are written in TypeScript
- Example app consumes both packages from GitHub Registry