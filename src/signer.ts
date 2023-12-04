import Arweave from 'arweave';
import { JWKInterface } from 'arweave/node/lib/wallet';
import { jsonToJWKInterface } from './utils';
import Transaction from 'arweave/node/lib/transaction';

export default class Signer {

  private jwk: JWKInterface;
  public arweave: Arweave;

  constructor(privateKey: string | object | Record<string, string> | JWKInterface) {
    this.jwk = jsonToJWKInterface(privateKey);
    this.arweave = Arweave.init({});
  }

  async sign(transaction: Transaction): Promise<void> {
    return this.arweave.transactions.sign(transaction, this.jwk);
  }

  async getPublicAddress(): Promise<string> {
    return this.arweave.wallets.getAddress(this.jwk);
  }
}

