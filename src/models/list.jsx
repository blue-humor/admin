import { useState, useCallback } from 'react';

import { reqTableList, reqDelete } from '@/services/article';

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editRow, setEditRow] = useState(null);

  const [total, setTotal] = useState(0);

  const isShowModal = (show, row = null) => {
    console.log(row);
    if (row?.id !== null) {
      setEditRow(row);
    }
    setIsModalVisible(show);
  };

  const handleConfirm = async (id) => {
    const res = await reqDelete({ id });
    if (res.code === 200) {
      message.success('删除成功！');
      actionRef.current.reload();
    } else {
      message.error('删除失败！');
    }
  };

  const handleTableList = async (params) => {
    let values = { ...params, pageNum: params.current };
    delete values.current;
    delete values.pageSize;
    const res = await reqTableList(values);
    if (res.code === 200) {
      setTotal(res.totalSize);
      return {
        data: res.data,
        success: true,
        total: res.totalSize,
      };
    }
  };

  return {
    handleConfirm,
    handleTableList,
    isModalVisible,
    setIsModalVisible,
    editRow,
    setEditRow,
    isShowModal,
    total,
    setTotal,
  };
};
