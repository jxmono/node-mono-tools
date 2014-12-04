Mono Tools
==========
Util tools for Mono framework developed at jillix.

# Installation

```sh
$ npm install mono-tools
```

# Documentation
## `MonoTools.app`
Util functions related to application environment.

### `require(file)`
Requires files from application directory.

#### Params
- **String** `file`: The absolute path to the file that is required (where the root is the application directory).

#### Return
- **Anything** The parsed content of the file.

### `descriptor()`
Returns the application descriptor.

#### Return
- **Object** The application descriptor.

## `MonoTools.module`
Util functions related to module environment.

### `get(miid)`
Returns module instance object with additional fields.

#### Params
- **String** `miid`: The module instance name.

#### Return
- **Object** An object containing the following fields:
 - `_miid` (Object): The raw module instance object.
 - `source` (String): Module source.
 - `owner` (String): Module owner.
 - `name` (String): Module name.
 - `version` (String): Module version.

### `path(miid)`
Gets the path to the module directory.

#### Params
- **String** `miid`: The module instance name.

#### Return
- **String** The absolute path to the module directory.

### `require(miid, file)`
Requires files from application directory.

#### Params
- **String** `miid`: The module instance name.
- **String** `file`: The absolute path to the file that is required (where the root is the module directory).

#### Return
- **Anything** The parsed content of the file.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## Changelog

### `1.0.0`
 - Initial stable release

## License
See the [LICENSE](./LICENSE) file.
