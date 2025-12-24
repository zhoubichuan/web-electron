export const npm = async (value) => {
  window.electron?.ipcRenderer?.sendMessage('npm', [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('npm', (arg) => {
      resolve(arg);
    });
  });
}

export const calendar = async (value) => {
  window.electron?.ipcRenderer?.sendMessage('calendar', [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('calendar', (arg) => {
      resolve(arg);
    });
  });
}

export const openApp = async (value) => {
  window.electron?.ipcRenderer?.sendMessage('app', [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('app', (arg) => {
      resolve(arg);
    });
  });
}
export const subscribe = {
  on: async (value) => {
    window.electron?.ipcRenderer?.sendMessage('on', [value]);
    return new Promise((resolve) => {
      window.electron?.ipcRenderer?.once('on', (arg) => {
        resolve(arg);
      });
    });
  },
  off: async (value) => {
    window.electron?.ipcRenderer?.sendMessage('off', [value]);
    return new Promise((resolve) => {
      window.electron?.ipcRenderer?.once('off', (arg) => {
        resolve(arg);
      });
    });
  },
  emit: async (value) => {
    window.electron?.ipcRenderer?.sendMessage('emit', [value]);
    return new Promise((resolve) => {
      window.electron?.ipcRenderer?.once('emit', (arg) => {
        resolve(arg);
      });
    });
  },
  once:async (value) => {
  window.electron?.ipcRenderer?.sendMessage('once', [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('once', (arg) => {
      resolve(arg);
    });
  });
}
}

export const exec = async (value) => {
  window.electron?.ipcRenderer?.sendMessage('exec', [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('exec', (arg) => {
      resolve(arg);
    });
  });
}

export const os = async (value) => {
  window.electron?.ipcRenderer?.sendMessage('os', [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('os', (arg) => {
      resolve(arg);
    });
  });
}
export const file = async (value) => {
  window.electron?.ipcRenderer?.sendMessage('file', [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('file', (arg) => {
      resolve(arg);
    });
  });
}

export const notification = async (value) => {
  window.electron?.ipcRenderer?.sendMessage('notification', [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('notification', (arg) => {
      resolve(arg);
    });
  });
}
export const update = async (value) => {
  window.electron?.ipcRenderer?.sendMessage('update', [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('update', (arg) => {
      resolve(arg);
    });
  });
}
