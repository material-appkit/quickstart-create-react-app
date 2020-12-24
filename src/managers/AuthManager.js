import StorageManager from '@material-appkit/core/managers/StorageManager';

class AuthManager {
  static get authInfo() {
    const authInfo = StorageManager.localValue('authInfo');
    return (authInfo) ? JSON.parse(authInfo) : null;
  }


  static authenticate(credentials) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const authInfo = {
          email: credentials.email,
        };

        StorageManager.setLocalValue(
          'authInfo', JSON.stringify(authInfo)
        );
        resolve(authInfo);
      }, 500);

    });
  }

  static logout() {
    StorageManager.removeLocalValue('authInfo');
  }
}

export default AuthManager;
