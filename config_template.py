class gNB_config():
    def __init__(self,GNB_SSH_HOST,GNB_SSH_PWD,GNB_ROOT,GNB_RUN_BASE_COMMAND,GNB_STOP_BASE_COMMAND) -> None:
        self.ip=GNB_SSH_HOST
        self.pwd = GNB_SSH_PWD
        self.root_path = GNB_ROOT
        self.run_command = GNB_RUN_BASE_COMMAND
        self.stop_command = GNB_STOP_BASE_COMMAND
    def generate_actual_run_command(self):
        raise NotImplementedError("Not Finished")
    
    def generate_actual_stop_command(self):
        raise NotImplementedError("Not Implemented yet.")

GNB_SSH_HOST="127.0.0.1"
GNB_USERNAME = 'your-user-name'
GNB_SSH_PWD='your-sudo-pwd'
GNB_ROOT = '/home/{GNB_USERNAME}/openairinterface5g'
GNB_RUN_BASE_COMMAND=""
GNB_STOP_BASE_COMMAND=""