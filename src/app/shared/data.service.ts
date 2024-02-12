/* Responsible for making external HTTP request
*/

export class DataService {
    getDetails() {
        const resultPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Resolve Data');
            }, 1500); 
        });

        return resultPromise; 
    }
}