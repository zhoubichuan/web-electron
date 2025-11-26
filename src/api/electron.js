export const getDeviceInfo = async (name, value) => {
  window.electron?.ipcRenderer?.sendMessage(name, [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once(name, (arg) => {
      resolve(arg);
    });
  });
}

export const getMac = async () => await getDeviceInfo('getMac', '')
export const getIp = async () => await getDeviceInfo('getIp', '')
export const getInfo = async () => await getDeviceInfo('getInfo', '')

export const npm = async (value) => {
  window.electron?.ipcRenderer?.sendMessage('npm', [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('npm', (arg) => {
      resolve(arg);
    });
  });
}