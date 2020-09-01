/* eslint-disable no-return-await */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import download from 'downloadjs';
import { getDefaultHeader } from '../utils/utils';
import { changeLoading } from '../actions';
import history from '../utils/history';
import config from '../utils/config';

export const fetchData = async (url, method = 'GET', headers = null, body = null) => {
  const result = await fetch(url, {
    headers: headers || getDefaultHeader(),
    method,
    body: body ? JSON.stringify(body) : null,
  });
  const { status } = result;
  if (status === 401) {
    window.localStorage.clear();
    history.push({
      pathname: '/',
      state: { error: 'Su sesión ha finalizado' },
    });
    return {};
  }
  return await result.json();
};

export const fetchFiles = async (url, method = 'GET', body = null) => {
  const result = await fetch(url, {
    headers: getDefaultHeader(),
    method,
    body: body ? JSON.stringify(body) : null,
  });
  const { status } = result;
  if (status === 401) {
    history.push({
      pathname: '/',
      state: { error: 'Su sesión ha finalizado' },
    });
    return {};
  }
  return await result.blob();
};

//General fetch for paginate
export const useFetchGet = (url, page, filter, id, secondFilter) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  let formatUrl = url;
  if (page) formatUrl += `?page=${page}&perPage=${config.rowsPerPage}`;
  if (filter) formatUrl += `&filter=${filter}`;
  if (id) formatUrl += `/${id}`;

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(changeLoading());
        const data = await fetchData(formatUrl);
        dispatch(changeLoading());
        setData(data);
      } catch (error) {
        dispatch(changeLoading());
        console.error(error.toString());
      }
    };

    getData();
  }, [url, page, filter]);

  return data;
};

//Advanced query
export const useFetchQuery = ({ url, page, filters, groupBy, searchBy, cb }) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const perPage = config.rowsPerPage;

  const body = {
    page,
    perPage,
    filters,
    groupBy,
    searchBy,
  };

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(changeLoading());
        const data = await fetchData(url, 'POST', null, body);
        dispatch(changeLoading());
        setData(data);
        if (cb) cb(data);
      } catch (error) {
        dispatch(changeLoading());
        console.error(error.toString());
      }
    };

    getData();
  }, [url, page, searchBy]);

  return data;
};

export const useFetchPost = (url, update, body, dispatch, history) => {
  const method = update ? 'PUT' : 'POST';

  const getData = async () => {
    try {
      dispatch(changeLoading());
      const data = await fetchData(url, method, null, body);
      // dispatch(addNotification({ type: 'success' }));
      dispatch(changeLoading());
      if (history) history.goBack();
      return data;
    } catch (error) {
      // dispatch(addNotification({ type: 'error' }));
      dispatch(changeLoading());
      console.error(error.toString());
    }
  };

  getData();
};

//Fetch for download files
export const useFetchFiles = (url, method, body, dispatch, nameFile) => {
  const getData = async () => {
    try {
      dispatch(changeLoading());
      const data = await fetchFiles(url, method, body);
      dispatch(changeLoading());
      download(data, nameFile);
    } catch (error) {
      dispatch(addNotification({ type: 'error' }));
      dispatch(changeLoading());
      console.error(error.toString());
    }
  };

  getData();
};

export const useFetchDelete = (url, id, dispatch) => {
  const formatUrl = `${url}/${id}`;
  const getData = async () => {
    try {
      dispatch(changeLoading());
      const data = await fetchData(formatUrl, 'DELETE');
      dispatch(addNotification({ type: 'success', message: 'Eliminado correctamente' }));
      dispatch(changeLoading());
      return data;
    } catch (error) {
      dispatch(addNotification({ type: 'error' }));
      dispatch(changeLoading());
      console.error(error.toString());
    }
  };

  getData();
};
