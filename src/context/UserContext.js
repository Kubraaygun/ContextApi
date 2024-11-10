/* 
Context API:
Uygulama birden çok bileşenin ihtiyacı olan verileri bileşenlerden bağımsız bir şekilde konumlanan merkezlerde yönetmeye yarar.

Context yapısı içinde verilerin state'i ve verileri değiştirmeye yarayan  fonksiyonları tutabiliriz.

Context tuttuğumuz statelerin bileşenlere doğrudan aktarım yapabilen state yönetim aracıdır.
 */

import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
//1.adım: Context yapısının temelini oluştur
export const UserContext = createContext();

//2. adım: Verileri bileşene aktaracak olan sağlayıcı ve onun tuttuğu verileri tanımlarız.
export const UserProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      // Apiye ıstek at
      .get('https://jsonplaceholder.typicode.com/users')
      // İstek başarılı ise state'e verileri aktar
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      // İstek başarısız ise hatayı error stateıne aktar
      .catch(error => {
        setLoading(error.message);
        setLoading(false);
      });
  }, []);

  //3. adım: Sağlayıcı fonksıyonları mutlaka providerı return etmelidir ve App'i sarmalamalıdır.
  // value olarak eklenen değerler projedeki bileşenler tarafından erişilebilir olur.
  return (
    <UserContext.Provider value={{users, error, loading}}>
      {children}
    </UserContext.Provider>
  );
};
