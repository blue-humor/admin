import request from "@/utils/request";





export async function reqTableList	(data, options) {
  return request('/data/list', {
    method: 'post',
    data,
    ...(options || {}),
  });
}
 

export async function reqEditorAdd	(data, options) {
  return request('/data/add', {
    method: 'post',
    data,
    ...(options || {}),
  });
}

export async function reqEditorUpdata	(data, options) {
  return request('/data/update', {
    method: 'post',
    data,
    ...(options || {}),
  });
}

export async function reqDelete	(data, options) {
  return request('/data/delete', {
    method: 'post',
    data,
    ...(options || {}),
  });
}
 