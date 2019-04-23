import React, {Component} from 'react';
import Amplify, {Auth} from 'aws-amplify';
import Cookies from 'universal-cookie';
import CryptoJS from 'crypto-js';

const CognitoConfig = {
    Auth: {
        identityPoolId: 'eu-central-1:812a7b86-a2f8-4eae-a923-1bfba23f640e',
        region: 'eu-central-1',
        userPoolId: 'eu-central-1_LGXovTtBu',
        userPoolWebClientId: '4uo7n5qk9pri721u76u7q0qrhe'
    }
};
Amplify.configure(CognitoConfig);

class Cognito extends Component {

    chunkSubstr = (str, size) => {
        let chunks = new Array(Math.ceil(str.length / size)),
        nChunks = chunks.length;
  
        let newo = 0;
        for(let i = 0, o = 0; i < nChunks; ++i, o = newo) {
            newo += size;
            chunks[i] = str.substr(o, size);
        }
    
        return chunks;

    }

    loginYazdir = (message) => {
        // const cryptoJS = new CryptoJS();
        // console.log(JSON.stringify(message));
        const guid = "314dceb7-3505-4c32-99fc-485e9e44c21b";
        let encrypted = CryptoJS.AES.encrypt(JSON.stringify(message), `bidgong-${guid}`);
        // var decryptedBytes = CryptoJS.AES.decrypt(encrypted.toString(), `bidgong-${guid}`);
        // var decrypted= JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
          console.log(encrypted.toString());
        let chunks = this.chunkSubstr(encrypted.toString(),2000);
        // console.log(decrypted);
        const cookies = new Cookies();
        // let tomorrow = new Date();
        // tomorrow.setHours(tomorrow.getHours()+1);
        let userChunkLegth = cookies.get('userChunkLegth');
        console.log(userChunkLegth);
        if(userChunkLegth!==undefined)
        {
            let userChunkLegthInt = parseInt(userChunkLegth);
            for(let i = 0; i < userChunkLegthInt; ++i) {
                let cookieName = `bidgonguser${index}`;
                cookies.remove(cookieName);
            }
            cookies.remove(`userChunkLegth`);
        }

        console.log(chunks.length);
        cookies.set(`userChunkLegth`, chunks.length, { path: '/' });
        var index = -1;
        for(let i = 0; i < chunks.length; ++i) {
            index++;
            let cookieName = `bidgonguser${index}`;
            let chunk = chunks[index];
            cookies.set(cookieName, chunk, { path: '/' });
        }
        let encryptedText = "";
        let cookieLength = parseInt(cookies.get('userChunkLegth'));
        console.log(cookieLength);
        for(let i = 0; i < cookieLength; ++i) {
            let cookieName = `bidgonguser${i}`;
            console.log(cookieName);
            encryptedText+=cookies.get(cookieName);
        }

        var decryptedBytes = CryptoJS.AES.decrypt(encryptedText, `bidgong-${guid}`);
        var decrypted= JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
        console.log(decrypted);
    };

    loginEt = (userObj) => {

        Auth.signIn(userObj.username, userObj.password)
            .then(success =>  this.loginYazdir(success))
            .catch(err => console.log(err));

        // Auth.signIn('testadmin', '12345678')
        //     .then(success =>  console.log(success))
        //     .catch(err => console.log(err));
    };

    registerEt = (userObj) => {
        Auth.signUp(userObj).then(success =>  console.log(success))
            .catch(err => console.log(err));;
        // Auth.signUp({
        //     username: 'someemail@example2'+ Math.floor(Math.random() * 1000)+'.com',
        //     password: '12345678',
        //     attributes: {
        //         email: 'someemail@example2.com'
        //     }
        // }).then(success =>  console.log(success))
        //     .catch(err => console.log(err));;

    }

    render() {

        return (
            <div>
                <button onClick={() => this.loginEt()}>Logina</button>  <button onClick={() => this.registerEt()}>RegisterEt</button>
                <p>{this.state.sonuc}</p>
            </div>
        );
    }
}

export default Cognito;