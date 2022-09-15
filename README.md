oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g clock
$ clock COMMAND
running command...
$ clock (--version)
clock/0.0.0 linux-x64 node-v18.8.0
$ clock --help [COMMAND]
USAGE
  $ clock COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`clock get:time [--iso | --utc ]`](#clock-gettime---iso----utc-)
* [`clock help [COMMAND]`](#clock-help-command)
* [`clock plugins`](#clock-plugins)
* [`clock plugins:install PLUGIN...`](#clock-pluginsinstall-plugin)
* [`clock plugins:inspect PLUGIN...`](#clock-pluginsinspect-plugin)
* [`clock plugins:install PLUGIN...`](#clock-pluginsinstall-plugin-1)
* [`clock plugins:link PLUGIN`](#clock-pluginslink-plugin)
* [`clock plugins:uninstall PLUGIN...`](#clock-pluginsuninstall-plugin)
* [`clock plugins:uninstall PLUGIN...`](#clock-pluginsuninstall-plugin-1)
* [`clock plugins:uninstall PLUGIN...`](#clock-pluginsuninstall-plugin-2)
* [`clock plugins update`](#clock-plugins-update)

## `clock get:time [--iso | --utc ]`

get local time

```
USAGE
  $ clock get time [--iso | --utc ]

FLAGS
  -i, --iso  get in iso string
  -n, --num  get in number
  -u, --utc  get in utc string

DESCRIPTION
  get local time

EXAMPLES
  $ clock get time

  $ clock get time --iso

  $ clock get time --utc

  $ clock get time --num
```

## `clock help [COMMAND]`

Display help for clock.

```
USAGE
  $ clock help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for clock.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `clock plugins`

List installed plugins.

```
USAGE
  $ clock plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ clock plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `clock plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ clock plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ clock plugins add

EXAMPLES
  $ clock plugins:install myplugin 

  $ clock plugins:install https://github.com/someuser/someplugin

  $ clock plugins:install someuser/someplugin
```

## `clock plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ clock plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ clock plugins:inspect myplugin
```

## `clock plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ clock plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ clock plugins add

EXAMPLES
  $ clock plugins:install myplugin 

  $ clock plugins:install https://github.com/someuser/someplugin

  $ clock plugins:install someuser/someplugin
```

## `clock plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ clock plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ clock plugins:link myplugin
```

## `clock plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ clock plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clock plugins unlink
  $ clock plugins remove
```

## `clock plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ clock plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clock plugins unlink
  $ clock plugins remove
```

## `clock plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ clock plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clock plugins unlink
  $ clock plugins remove
```

## `clock plugins update`

Update installed plugins.

```
USAGE
  $ clock plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
