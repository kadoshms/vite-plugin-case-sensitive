import path from 'path';
import { Plugin } from 'vite';
export function caseSensitive(): Plugin {
    return {
        name: 'case-sensitive',
        enforce: 'pre',
        async resolveId(source, importer, options) {
            const resolution = await this.resolve(source, importer, {
                skipSelf: true,
                ...options
            });

            const basename = path.basename(source);
            if (resolution) {
                const resolvedPath = path.relative(path.resolve(), resolution.id);

                if (!resolvedPath.includes(basename)) {
                    throw new Error(`Found case sensitive import ${source}, please pay attention that in some operating systems (such as Linux), hence it is recommended to keep your imports with the exact case.`);
                }
            }

            return resolution;
        },

    }
}
