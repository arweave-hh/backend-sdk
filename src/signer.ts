import Arweave from 'arweave';
import { JWKInterface } from 'arweave/node/lib/wallet';

export default class Signer {

  private privateKey: JWKInterface;
  public arweave: Arweave;

  constructor(privateKey: JWKInterface) {
    this.privateKey = privateKey;
    this.arweave = Arweave.init({

    });
  }

  async sign() {
  }

  async getPublicAddress() {
    return this.arweave.wallets.getAddress();
  }
}

