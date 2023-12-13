var  data = new Object();
//data.media = require('./media.json');

module.exports = data;
data.asterisk = new Object();


data.agentSyncInterval = process.env.AGENT_SYNC_INTERVAL;

data.asterisk.user = process.env.ASTERISK_USER;
data.asterisk.password = process.env.ASTERISK_PASSWORD;
data.asterisk.ip = process.env.ASTERISK_IP;
data.asterisk.gw_ipaddr_port = process.env.ASTERISK_GW_IPADDR_PORT;
data.asterisk.port = process.env.ASTERISK_PORT;
data.asterisk.stasisApp = process.env.ASTERISK_STASISAPP;
data.dtmf_timeout = process.env.DTMF_TIMEOUT;

data.media = new Object()
data.media.dir = process.env.MEDIA_DIR;
data.media.rec_dir = process.env.MEDIA_REC_DIR;
data.media.invalid_IVRTree = process.env.MEDIA_INVALID_IVRTREE
data.media.waiting_imp_call = process.env.MEDIA_WAITING_IMP_CALL
data.media.waiting_imp_call_10sec = process.env.MEDIA_WAITING_IMP_CALL_10SEC
data.media.waiting_imp_call_15sec = process.env.MEDIA_WAITING_IMP_CALL_15SEC
data.media.waiting_imp_call_20sec = process.env.MEDIA_WAITING_IMP_CALL_20SEC
data.media.call_hold_music = process.env.MEDIA_CALL_HOLD_MUSIC
data.media.call_hold_music_15sec = process.env.MEDIA_CALL_HOLD_MUSIC_15SEC
data.media.call_hold_music_20sec = process.env.MEDIA_CALL_HOLD_MUSIC_20SEC
data.media.call_hold_music_25sec = process.env.MEDIA_CALL_HOLD_MUSIC_25SEC
data.media.call_hold_music_35sec = process.env.MEDIA_CALL_HOLD_MUSIC_35SEC
data.media.call_transfer = process.env.MEDIA_CALL_TRANSFER
data.media.invalid_agent_ext = process.env.MEDIA_INVALID_AGENT_EXT
data.media.notrechable_agent_ext = process.env.MEDIA_NOTRECHABLE_AGENT_EXT
data.media.agent_ext_busy = process.env.MEDIA_AGENT_EXT_BUSY
data.media.agent_ext_onbreak = process.env.MEDIA_AGENT_EXT_ONBREAK
data.media.agent_ext_not_picking = process.env.MEDIA_AGENT_EXT_NOT_PICKING
data.media.agent_ext_unavailable = process.env.MEDIA_AGENT_EXT_UNAVAILABLE
data.media.call_get_recorded = process.env.MEDIA_CALL_GET_RECORDED
data.media.jingle = process.env.MEDIA_JINGLE

data.voicemail = new Object()
data.voicemail.recording = process.env.VOICEMAIL_RECORDING
data.voicemail.welcome = process.env.VOICEMAIL_WELCOME
data.voicemail.welcome_offhour = process.env.VOICEMAIL_WELCOME_OFFHOUR
data.voicemail.no_input = process.env.VOICEMAIL_NO_INPUT
data.voicemail.call_again = process.env.VOICEMAIL_CALL_AGAIN
data.voicemail.thanks_noagent = process.env.VOICEMAIL_THANKS_NOAGENT
data.voicemail.rec_voicemail = process.env.VOICEMAIL_REC_VOICEMAIL
data.voicemail.no_voicemail_thanks = process.env.VOICEMAIL_NO_VOICEMAIL_THANKS
data.voicemail.no_working_hours = process.env.VOICEMAIL_NO_WORKING_HOURS
data.voicemail.thanks_voicemail_msg = process.env.VOICEMAIL_THANKS_VOICEMAIL_MSG
data.voicemail.simple_voicemail_msg = process.env.VOICEMAIL_SIMPLE_VOICEMAIL_MSG


data.outgoing = new Object()
data.outgoing.number_length = process.env.OUTGOING_NUMBER_LENGTH
data.outgoing.agent_c2c_wait_retry = process.env.OUTGOING_AGENT_C2C_WAIT_RETRY
data.outgoing.welcome = process.env.OUTGOING_WELCOME
data.outgoing.not_input_add_extention = process.env.OUTGOING_NOT_INPUT_ADD_EXTENTION
data.outgoing.customer_on_hold_now = process.env.OUTGOING_CUSTOMER_ON_HOLD_NOW
data.outgoing.customer_un_hold_now = process.env.OUTGOING_CUSTOMER_UN_HOLD_NOW
data.outgoing.transferring_call = prcoess.env.OUTGOING_TRANSFERRING_CALL
data.outgoing.entered_number_is = process.env.OUTGOING_ENTERED_NUMBER_IS
data.outgoing.entered_number_confirm = process.env.OUTGOING_ENTERED_NUMBER_CONFIRM
data.outgoing.could_not_connect_customer = process.env.OUTGOING_COULD_NOT_CONNECT_CUSTOMER
data.outgoing.not_available = process.env.OUTGOING_NOT_AVAILABLE
data.outgoing.busy_or_switchedoff = process.env.OUTGOING_BUSY_OR_SWITCHEDOFF
data.outgoing.number_is_bussy = prcoess.env.OUTGOING_NUMBER_IS_BUSSY
data.outgoing.notresponding_or_switchedoff = process.env.OUTGOING_NOTRESPONDING_OR_SWITCHEDOFF
data.outgoing.agent_wait_sometime = process.env.OUTGOING_AGENT_WAIT_SOMETIME
data.outgoing.agent_try_after_sometime = process.env.OUTGOING_AGENT_TRY_AFTER_SOMETIME
data.outgoing.agent_wait_fetching_data = process.env.OUTGOING_AGENT_WAIT_FETCHING_DATA

//API configuration
data.server = new Object();
data.server.ip = process.env.SERVER_IP
data.server.port = process.env.SERVER_PORT;
data.server.protocol = process.env.SERVER_PROTOCOL;
data.server.services_name = process.env.SERVER_SERVICES_NAME;
data.server.timeout = process.env.SERVER_TIMEOUT;
data.server.allowed_attempts = process.env.SERVER_ALLOWED_ATTEMPTS;
data.server.agent_attempts = process.env.SERVER_AGENT_ATTEMPTS;
data.server.timer_agent_gap = process.env.SERVER_TIMER_AGENT_GAP;
data.server.crm_api_ip = process.env.SERVER_CRM_API_IP;
data.server.crm_api_port = process.env.SERVER_CRM_API_PORT;
data.server.crm_api_protocol = process.env.SERVER_CRM_API_PROTOCOL;
data.server.crm_api_service_name = process.env.SERVER_CRM_API_SERVICE_NAME;
data.server.self_ip = process.env.SERVER_SELF_IP;

//IVR API configuration of new db interation
data.ivr_api = new Object();
data.ivr_api.url = process.env.IVR_API_URL;
data.ivr_api.url_v2 = process.env.IVR_API_URL_V2;
data.ivr_api.url_v3 = process.env.IVR_API_URL_V3;
data.ivr_api.url_live_calls = process.env.IVR_API_URL_LIVE_CALLS;
data.ivr_api.timeout = process.env.IVR_API_TIMEOUT;
data.ivr_api.allowed_attempts = process.env.IVR_API_ALLOWED_ATTEMPTS;
data.ivr_api.self_ip = process.env.IVR_API_SELF_IP;


//CRM API configuration for Customer Side Submit
data.crm_api = new Object();
data.crm_api.url = process.env.CRM_API_URL;
data.crm_api.timeout = process.env.CRM_API_TIMEOUT;
data.crm_api.allowed_attempts = process.env.CRM_API_ALLOWED_ATTEMPTS;
data.crm_api.self_ip = process.env.CRM_API_SELF_IP;

//ZMQ configuration
data.zmq = new Object();
data.zmq.ip = process.env.ZMQ_IP;
data.zmq.port = process.env.ZMQ_PORT;
data.zmq.protocol = process.env.ZMQ_PROTOCOL;
data.zmq_sms = new Object();
data.zmq_sms.ip = process.env.ZMQ_SMS_IP;
data.zmq_sms.port = process.env.ZMQ_SMS_PORT;
data.zmq_sms.protocol = process.env.ZMQ_SMS_PROTOCOL;


//Database configuration
//data.database = new Object()
//data.database.dbtype = 'mariadb';
//data.database.host = '3.7.246.160';
//data.database.user = 'qaqa';
//data.database.password = 'Jwejkdcb@@1123';
//data.database.db = 'kommuno_qa'
//data.database.limit = 10;
//data.database.db_refresh_time = 60;


data.cdr = new Object()
data.cdr.path = process.env.CDR_PATH
data.cdr.title = process.env.CDR_TITLE
data.agentCdr = new Object()
data.agentCdr.path = process.env.AGENT_CDR_PATH
data.agentCdr.title = process.env.AGENT_CDR_TITLE


data.log = new Object()
data.log.level = process.env.LOG_LEVEL;
data.log.file_size = process.env.LOG_FILE_SIZE;
data.log.write_to_console_flag = process.env.LOG_WRITE_TO_CONSOLE_FLAG;
data.log.general_log_path = process.env.LOG_GENERAL_LOG_PATH;
data.log.general_log_file = process.env.LOG_GENERAL_LOG_FILE;
data.log.summary_log_path = process.env.LOG_SUMMARY_LOG_PATH;
data.log.summary_log_file = process.env.LOG_SUMMARY_LOG_FILE;
data.log.error_log_path = process.env.LOG_ERROR_LOG_PATH;
data.log.error_log_file = process.env.LOG_ERROR_LOG_FILE;
data.log.cdr_log_path = process.env.LOG_CDR_LOG_PATH;
data.log.cdr_log_file = process.env.LOG_CDR_LOG_FILE;


//timer expire values
data.timer = new Object()
data.timer.transfer_dtmf_timer = process.env.TIMER_TRANSFER_DTMF_TIMER; //in seconds
data.timer.call_hold_reminder_to_agent_timer = process.env.TIMER_CALL_HOLD_REMINDER_TO_AGENT_TIMER; //in seconds


//security API token details
data.secret = new Object()
data.secret.days = process.env.SECRET_DAYS;

//S3 Secret token details
data.aws = new Object()
data.aws.access_key_id = process.env.AWS_ACCESS_KEY_ID;
data.aws.secret_access_key = process.env.AWS_SECRET_ACCESS_KEY;
data.aws.bucket_name = process.env.AWS_BUCKET_NAME;


//External EndCall SMS API for custom messages 3rd Party
data.thirdParty_sms_api = new Object();
data.thirdParty_sms_api.url = process.env.THIRD_PARTY_SMS_API_URL;
data.thirdParty_sms_api.timeout = process.env.THIRD_PARTY_SMS_API_TIMEOUT;
data.thirdParty_sms_api.allowed_attempts = process.env.THIRD_PARTY_SMS_API_ALLOWED_ATTEMPTS;
data.thirdParty_sms_api.self_ip = process.env.THIRD_PARTY_SMS_API_SELF_IP;

//Webrtc Server Details
data.webrtc_server = new Object();
data.webrtc_server.ip = process.env.WEBRTC_SERVER_IP;
data.webrtc_server.port = process.env.WEBRTC_SERVER_PORT;

//Site detail for making outgoing call & recording
data.system = new Object();
data.system.site_name = process.env.SYSTEM_SITE_NAME;
data.system.call_type = process.env.SYSTEM_CALL_TYPE;
data.system.incoming_channels_capacity = process.env.SYSTEM_INCOMING_CHANNELS_CAPACITY;
data.system.bidirectional_channels_capacity = process.env.SYSTEM_BIDIRECTIONAL_CHANNELS_CAPACITY;
data.system.max_resource_utilization = process.env.SYSTEM_MAX_RESOURCE_UTILIZATION;
data.system.recording_type=process.env.SYSTEM_RECORDING_TYPE;
//data.system.recording_type='mp3';

//non working hour and day details
data.offline = new Object();
data.offline.upload_path=process.env.OFFLINE_UPLOAD_PATH;

//AI-BOT API configuration 
data.aibot_api = new Object();
data.aibot_api.url = process.env.AIBOT_API_URL;
data.aibot_api.timeout = process.env.AIBOT_API_TIMEOUT;
data.aibot_api.allowed_attempts = process.env.AIBOT_API_ALLOWED_ATTEMPTS;
data.aibot_api.self_ip = process.env.AIBOT_API_SELF_IP;
data.aibot_api.server_ip = process.env.AIBOT_API_SERVER_IP;
data.aibot_api.server_port = process.env.AIBOT_API_SERVER_PORT;
