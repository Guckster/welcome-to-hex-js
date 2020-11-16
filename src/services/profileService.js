import httpClient from '../utils/httpClient';

const apiUrl = process.env.REACT_APP_API_URL + '/profile';

const profileService = {
    getProfileData: async () => {
            try {
                let response = await httpClient(apiUrl, false, null, null, null);
                
                if(!response.ok){
                    throw Error(response.statusText);
                }
        
                let data = await response.json();  
                return data;

            } 
            catch (err) {
                console.error(err);
                throw err;
            }
    }
};

export default profileService;