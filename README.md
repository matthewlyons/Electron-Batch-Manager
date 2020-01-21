# Electron Batch File Manager

This project is meant to allow users to run batch files from their taskbar.

The batchFiles folder contains all batch files that will be loaded into the taskbar and updates the list each time it runs.

```
async function loadFiles() {
  await fs.readdir(batchFolder, (err, files) => {
    let actionList = files.map((file) => {
      return {
        program: app.getAppPath() + './batchFiles/' + file,
        title: file.substring(0, file.indexOf('.'))
      };
    });

    app.setUserTasks(actionList);
  });
}
```

<img src="https://i.imgur.com/rrWc4yc.png"/>

<img src="https://i.imgur.com/XP63k1Q.png"/>
