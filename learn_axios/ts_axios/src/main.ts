import axios from 'axios'

async function getUser() {
  try {
    const response = await axios.get('http://192.168.0.103:8001/classify/gets');

    const data = response.data
    for (const item in data) {
      console.log('解析数据')
      console.log(data[item])
    }
  } catch (error) {
    console.error(error);
  }
}

getUser();
