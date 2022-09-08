import path from 'path';
import {
  app,
  BrowserView,
  BrowserWindow,
  clipboard,
  dialog,
  globalShortcut,
  Menu,
  nativeTheme,
  shell,
  ipcMain,
  screen,
  // Tray,
} from 'electron';
const platformToExecutables: any = {
  win32: {
    migrationEngine:
      'node_modules/@prisma/engines/migration-engine-windows.exe',
    queryEngine: 'node_modules/@prisma/engines/query_engine-windows.dll.node',
  },
  linux: {
    migrationEngine:
      'node_modules/@prisma/engines/migration-engine-debian-openssl-1.1.x',
    queryEngine:
      'node_modules/@prisma/engines/libquery_engine-debian-openssl-1.1.x.so.node',
  },
  darwin: {
    migrationEngine:
      'node_modules/@prisma/engines/migration-engine-darwin-arm64',
    queryEngine:
      'node_modules/@prisma/engines/libquery_engine-darwin-arm64.dylib.node',
  },
};

export default async function runPrismaCommand({
  command,
  dbUrl,
}: {
  command: string[];
  dbUrl: string;
}): Promise<number> {
  const mePath = path.join(
    app.getAppPath().replace('app.asar', 'app.asar.unpacked'),
    platformToExecutables[process.platform].migrationEngine
  );

  console.log(command, dbUrl);
  try {
    const exitCode = await new Promise((resolve, _) => {
      const prismaPath = path.resolve(
        __dirname,
        '..',
        '..',
        'node_modules/prisma/build/index.js'
      );
      console.log(prismaPath);

      const child = fork(prismaPath, command, {
        env: {
          ...process.env,
          DATABASE_URL: dbUrl,
          PRISMA_MIGRATION_ENGINE_BINARY: mePath,
          PRISMA_QUERY_ENGINE_LIBRARY: path.join(
            app.getAppPath().replace('app.asar', 'app.asar.unpacked'),
            platformToExecutables[process.platform].queryEngine
          ),
        },
        stdio: 'inherit',
      });

      child.on('error', (err) => {
        console.log(err);

        // log.error('Child process got error:', err);
      });

      child.on('close', (code, signal) => {
        resolve(code);
      });
    });

    if (exitCode !== 0)
      throw Error(`command ${command} failed with exit code ${exitCode}`);

    return exitCode;
  } catch (e) {
    console.log(e);

    // log.error(e);
    throw e;
  }
}
