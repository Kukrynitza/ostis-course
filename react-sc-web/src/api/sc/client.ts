import { ScClient, ScHelper } from 'ts-sc-client';
import { SC_URL } from '@constants';

const TIMEOUT = 2000;

export let client: ScClient;
export let helper: ScHelper;
let onError: () => void;
let onClose: () => void;

const getClient = () => {
  if (onError) client.removeEventListener('error', onError);
  if (onClose) client.removeEventListener('close', onClose);

  client = new ScClient(SC_URL);
  helper = new ScHelper(client);
  onError = () => {
    setTimeout(getClient, TIMEOUT);
  };

  onClose = () => {
    setTimeout(getClient, TIMEOUT);
  };

  client.addEventListener('error', onError);
  client.addEventListener('close', onClose);
};

getClient();
