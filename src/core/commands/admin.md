---
outline: deep
---

# Command List

The default prefix for Wikilicia is `!`.

[] - **Required Argument** | () - **Optional Argument**

::: tip
If you forgot the custom prefix of Wikilicia, mention the bot in a channel!
:::

## Server Settings `!wikilicia ...`

`!wikilicia [action]`

| **Action** | **Description** | **User Permissions** |
| - | - | - |
| `prefix [new]` | Change your bot's command prefix (up to 5 characters). | Manage Server |
| `factoryreset` | Wipe all custom settings (prefix, disabled modules/commands. allowlists) back to default. | Manage Server |
| `modules` | List out every module (i.e. cog) your server can currently use. Premium modules will be omitted if Premium is off. | Manage Server |
| `config` | Show your server's current settings at a glance: prefix, premium on/off, what's disabled or restricted. | Manage Server |

**Example:**

- `!wikilicia prefix ?` - Bot server-wide prefix set to `?` instead of default `!`.


## Command Management `!wikilicia_cmd ...`

`!wikilicia_cmd [action] [command] (#channels or @roles)`

| **Action** | **Description** | **User Permissions** |
| - | - | - |
| `disable` | Globally disable a command. | Manage Server |
| `enable` | Re-enable a previously disabled command. | Manage Server |
| `restrictchannel` | Only allow the named command in the given text channels. (You can specify more at one aka: #general #testing #spanish) | Manage Server |
| `unrestrictchannel` | Remove channel restriction for the named command. | Manage Server |
| `restrictrole` | Only allow the named command for members holding the mentioned roles. (You can specify more at one aka: #booster #moderator #streamer) | Manage Server |
| `unrestrictrole` | Remove role restriction for the named command. | Manage Server |

**Example:**

- `!wikilicia_cmd disable hug` - Disable the `hug` command server-wide.
- `!wikilicia_cmd restrictchannel kiss #fun-zone #media` - Only `kiss` can be used in `#fun-zone` and `#media`.
 

## Module (Cog) Management `!wikilicia_mod ...`

`!wikilicia_mod [action] [modules] (#channels or @roles)`
- Here, `[modules]` is one off: `alicia` `funactivity` `family`.

| **Action** | **Description** | **User Permissions** |
| - | - | - |
| `disable` | Disable an entire module (and all its commands) server-wide. | Manage Server |
| `enable` | Re-enable a previously disabled module. | Manage Server |
| `restrictchannel` | Only allow commands in that module to run in the given text channels. (You can specify more at one aka: #general #testing #spanish) | Manage Server |
| `unrestrictchannel` | Remove channel restriction for that module. | Manage Server |
| `restrictrole` | Only allow all commands in that module to members holding the mentioned roles. (You can specify more at one aka: #booster #moderator #streamer) | Manage Server |
| `unrestrictrole` | Remove role restriction for that module. | Manage Server |

**Example:**

- `!wikilicia_mod disable alicia` - Turn off the entire `alicia` module.
- `!wikilicia_cmd restrictrole funactivity #boosters #moderators` - Only members with `@boosters` and `@moderators` role can use any funactivyt commands. 