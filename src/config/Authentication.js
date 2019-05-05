
import Amplify from 'aws-amplify';

export default function Authentication(Auth){

    const CognitoConfig = {
        Auth: {
            identityPoolId: 'eu-central-1:1c5a3f0c-5565-404d-98c9-b069fc9357e1',
            region: 'eu-central-1',
            userPoolId: 'eu-central-1_GOzKn4ox4',
            userPoolWebClientId: '1it2958up6hhfttd46soh7v73t'
        }
    };

	// const CognitoConfig = {
    //     Auth: {
    //         identityPoolId: 'eu-central-1:812a7b86-a2f8-4eae-a923-1bfba23f640e',
    //         region: 'eu-central-1',
    //         userPoolId: 'eu-central-1_LGXovTtBu',
    //         userPoolWebClientId: '4uo7n5qk9pri721u76u7q0qrhe'
    //     }
    // };

    // const CognitoConfig = {
    //     Auth: {
    //         identityPoolId: 'eu-central-1:7719a11a-a109-4da7-a607-43fe99cdc2d9',
    //         region: 'eu-central-1',
    //         userPoolId: 'eu-central-1_bfi67rQT4',
    //         userPoolWebClientId: '1a0rhqq0a04f3faulmka35e4ag'
    //     }
    // };

    Amplify.configure(CognitoConfig);

    return Auth;
}
  




