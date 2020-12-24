import StorageManager from '@material-appkit/core/managers/StorageManager';

class AuthManager {
  static get authInfo() {
    const authInfo = StorageManager.localValue('authInfo');
    return (authInfo) ? JSON.parse(authInfo) : null;
  }


  static authenticate(credentials) {
    return new Promise((resolve, reject) => {
      if (typeof(credentials) === 'object') {
        const authInfo = { email: credentials.email };

        // eslint-disable-next-line no-console
        console.log('TODO: Send authentication request', authInfo);
        setTimeout(() => {
          StorageManager.setLocalValue(
            'authInfo', JSON.stringify(authInfo)
          );
          resolve(authInfo);
        }, 500);
      } else {
        reject();
      }
    });
  }


  static sendPasswordReset(email) {
    return new Promise((resolve, reject) => {
      if (email) {
        // eslint-disable-next-line no-console
        console.log('TODO: Send password reset email');

        setTimeout(() => {
          resolve();
        }, 500);
      } else {
        reject();
      }
    });
  }


  static logout() {
    StorageManager.removeLocalValue('authInfo');
  }
}

export default AuthManager;
