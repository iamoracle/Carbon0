import { useSnapshot } from "valtio";

import { ModalCtrl } from "@web3modal/react-native/src//controllers/ModalCtrl";
import { ClientCtrl } from "@web3modal/react-native/src/controllers/ClientCtrl";
import { OptionsCtrl } from "@web3modal/react-native/src/controllers/OptionsCtrl";

export function useWeb3Modal() {
  const modalState = useSnapshot(ModalCtrl.state);
  const clientState = useSnapshot(ClientCtrl.state);

  const disconnect = async () => {
    OptionsCtrl.resetAccount();
    ClientCtrl.clearSession();
  };

  return {
    isOpen: modalState.open,
    open: ModalCtrl.open,
    close: ModalCtrl.close,
    provider: ClientCtrl.state.provider,
    initialized: clientState.initialized,
    disconnect,
  };
}
