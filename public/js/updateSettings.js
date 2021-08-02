/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

// type is eather 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://localhost:3200/api/v1/users/updateMyPassword'
        : 'http://localhost:3200/api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully`);
      window.setTimeout(() => location.assign('/me'), 1500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};