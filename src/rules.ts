import { IRules } from '@meetio/scheme-generator';

export const rules: Array<IRules> = [
    {
        scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
        settings: {
            foreground: 'var(comments)',
        },
    },
    {
        scope: [
            'constant',
            'entity.name.constant',
            'variable.other.constant',
            'variable.language',
        ],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['entity.name.type.class', 'entity, entity.name'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        scope: ['variable.parameter.function'],
        settings: {
            foreground: 'var(gray)',
        },
    },
    {
        scope: ['entity.name.tag'],
        settings: {
            foreground: 'var(green)',
        },
    },
    {
        scope: ['keyword'],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        scope: ['storage', 'storage.type'],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        scope: [
            'storage.modifier.package',
            'storage.modifier.import',
            'storage.type.java',
        ],
        settings: {
            foreground: 'var(gray)',
        },
    },
    {
        scope: [
            'string',
            'punctuation.definition.string',
            'string punctuation.section.embedded source',
        ],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['support'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['meta.property-name'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['variable'],
        settings: {
            foreground: 'var(orange)',
        },
    },
    {
        scope: ['variable.other'],
        settings: {
            foreground: 'var(orange)',
        },
    },
    {
        scope: ['invalid.broken'],
        settings: {
            font_style: 'italic',
            foreground: 'var(red)',
        },
    },
    {
        scope: ['invalid.deprecated'],
        settings: {
            font_style: 'italic',
            foreground: 'var(red)',
        },
    },
    {
        scope: ['invalid.illegal'],
        settings: {
            font_style: 'italic',
            foreground: 'var(red)',
        },
    },
    {
        scope: ['support.constant'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['support.variable'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['support.function.js', 'meta.function-call'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        scope: ['markup.list'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
            font_style: 'bold',
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['markup.quote'],
        settings: {
            foreground: 'var(green)',
        },
    },
    {
        scope: ['markup.italic'],
        settings: {
            font_style: 'italic',
            foreground: 'var(gray)',
        },
    },
    {
        scope: ['markup.bold'],
        settings: {
            font_style: 'bold',
            foreground: 'var(gray)',
        },
    },
    {
        scope: ['markup.raw'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: [
            'markup.deleted',
            'meta.diff.header.from-file',
            'punctuation.definition.deleted',
        ],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        scope: [
            'markup.inserted',
            'meta.diff.header.to-file',
            'punctuation.definition.inserted',
        ],
        settings: {
            foreground: 'var(green)',
        },
    },
    {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
            foreground: 'var(orange)',
        },
    },
    {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['meta.diff.range'],
        settings: {
            foreground: 'var(blue)',
            font_style: 'bold',
        },
    },
    {
        scope: ['meta.diff.header'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['meta.separator'],
        settings: {
            font_style: 'bold',
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['meta.output'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['meta.function-call.constructor variable.type'],
        settings: {
            foreground: 'var(purple)',
        },
    }
];
