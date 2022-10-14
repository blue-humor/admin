import request from "@/utils/request";


// export function ossConfig() {
//   return request('/auth/oss/token')
// }



export async function reqFileImage	(data, options) {
  return request('/data/upload', {
    method: 'post',
    data,
    // headers:{
    //   'Content-Type':'multipart/form-data'
    // },
    ...(options || {}),
  });
}
 