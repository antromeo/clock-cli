import { Command, Flags } from '@oclif/core'

export default class Time extends Command {
    static description = 'get local time'

    static examples = [
        '<%= config.bin %> <%= command.id %>',
        '<%= config.bin %> <%= command.id %> --iso',
        '<%= config.bin %> <%= command.id %> --utc',
        '<%= config.bin %> <%= command.id %> --num'

    ]

    static flags = {
        iso: Flags.boolean({
            char: 'i',
            description: 'get in iso string',
            required: false,
            exclusive: ['utc', 'num']
        }),
        utc: Flags.boolean({
            char: 'u',
            description: 'get in utc string',
            required: false,
            exclusive: ['iso', 'num']
        }),
        num: Flags.boolean({
            char: 'n',
            description: 'get in number',
            required: false,
            exclusive: ['iso', 'utc']
        })

    }
    static usage =
        '<%= command.id %> [--iso | --utc ]'

    static args = []

    async run(): Promise<void> {
        const { flags } = await this.parse(Time)

        const date = this.getDate(flags)
        this.log(`time: ${date}`)
    }

    public getDate(flags: { iso: boolean; utc: boolean; num: boolean }) {
        switch (true) {
            case (flags.iso): {
                return new Date(Date.now()).toISOString()
            }
            case (flags.utc): {
                return new Date(Date.now()).toUTCString()
            }
            case (flags.num): {
                return Date.now()
            }
            default:
                return new Date(Date.now())
        }

    }
}
