import esBuild from 'esbuild';
import path from 'path';

esBuild.build({
    outdir: path.resolve(__dirname, '..', 'dist'),
    entryPoints: [path.resolve(__dirname, '..', 'src', 'index.ts')],
    entryNames: 'index',
    bundle: true,
    platform: 'node',
    minify: true,
    treeShaking: true,
    sourcemap: false,
    sourcesContent: false,
});
