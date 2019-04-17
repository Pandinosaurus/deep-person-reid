Search.setIndex({docnames:["AWESOME_REID","MODEL_ZOO","datasets","evaluation","index","pkg/data","pkg/engine","pkg/losses","pkg/metrics","pkg/models","pkg/optim","pkg/utils","user_guide"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:54},filenames:["AWESOME_REID.md","MODEL_ZOO.md","datasets.rst","evaluation.rst","index.rst","pkg/data.rst","pkg/engine.rst","pkg/losses.rst","pkg/metrics.rst","pkg/models.rst","pkg/optim.rst","pkg/utils.rst","user_guide.rst"],objects:{"torchreid.data":{datamanager:[5,0,0,"-"],sampler:[5,0,0,"-"],transforms:[5,0,0,"-"]},"torchreid.data.datamanager":{DataManager:[5,1,1,""],ImageDataManager:[5,1,1,""],VideoDataManager:[5,1,1,""]},"torchreid.data.datamanager.DataManager":{num_train_cams:[5,2,1,""],num_train_pids:[5,2,1,""],return_dataloaders:[5,3,1,""],return_testdataset_by_name:[5,3,1,""]},"torchreid.data.datasets":{__init__:[5,0,0,"-"],dataset:[5,0,0,"-"]},"torchreid.data.datasets.__init__":{init_image_dataset:[5,4,1,""],init_video_dataset:[5,4,1,""],register_image_dataset:[5,4,1,""],register_video_dataset:[5,4,1,""]},"torchreid.data.datasets.dataset":{Dataset:[5,1,1,""],ImageDataset:[5,1,1,""],VideoDataset:[5,1,1,""]},"torchreid.data.datasets.dataset.Dataset":{check_before_run:[5,3,1,""],combine_all:[5,3,1,""],download_dataset:[5,3,1,""],get_num_cams:[5,3,1,""],get_num_pids:[5,3,1,""],parse_data:[5,3,1,""],show_summary:[5,3,1,""]},"torchreid.data.datasets.dataset.ImageDataset":{show_summary:[5,3,1,""]},"torchreid.data.datasets.dataset.VideoDataset":{show_summary:[5,3,1,""]},"torchreid.data.datasets.image":{cuhk01:[5,0,0,"-"],cuhk03:[5,0,0,"-"],dukemtmcreid:[5,0,0,"-"],grid:[5,0,0,"-"],ilids:[5,0,0,"-"],market1501:[5,0,0,"-"],msmt17:[5,0,0,"-"],prid:[5,0,0,"-"],sensereid:[5,0,0,"-"],viper:[5,0,0,"-"]},"torchreid.data.datasets.image.cuhk01":{CUHK01:[5,1,1,""]},"torchreid.data.datasets.image.cuhk01.CUHK01":{prepare_split:[5,3,1,""]},"torchreid.data.datasets.image.cuhk03":{CUHK03:[5,1,1,""]},"torchreid.data.datasets.image.dukemtmcreid":{DukeMTMCreID:[5,1,1,""]},"torchreid.data.datasets.image.grid":{GRID:[5,1,1,""]},"torchreid.data.datasets.image.ilids":{iLIDS:[5,1,1,""]},"torchreid.data.datasets.image.market1501":{Market1501:[5,1,1,""]},"torchreid.data.datasets.image.msmt17":{MSMT17:[5,1,1,""]},"torchreid.data.datasets.image.prid":{PRID:[5,1,1,""]},"torchreid.data.datasets.image.sensereid":{SenseReID:[5,1,1,""]},"torchreid.data.datasets.image.viper":{VIPeR:[5,1,1,""]},"torchreid.data.datasets.video":{dukemtmcvidreid:[5,0,0,"-"],ilidsvid:[5,0,0,"-"],mars:[5,0,0,"-"],prid2011:[5,0,0,"-"]},"torchreid.data.datasets.video.dukemtmcvidreid":{DukeMTMCVidReID:[5,1,1,""]},"torchreid.data.datasets.video.ilidsvid":{iLIDSVID:[5,1,1,""]},"torchreid.data.datasets.video.mars":{Mars:[5,1,1,""]},"torchreid.data.datasets.video.mars.Mars":{combine_all:[5,3,1,""]},"torchreid.data.datasets.video.prid2011":{PRID2011:[5,1,1,""]},"torchreid.data.sampler":{RandomIdentitySampler:[5,1,1,""],build_train_sampler:[5,4,1,""]},"torchreid.data.transforms":{ColorAugmentation:[5,1,1,""],Random2DTranslation:[5,1,1,""],RandomErasing:[5,1,1,""],build_transforms:[5,4,1,""]},"torchreid.engine.engine":{Engine:[6,1,1,""]},"torchreid.engine.engine.Engine":{run:[6,3,1,""],test:[6,3,1,""],train:[6,3,1,""]},"torchreid.engine.image.softmax":{ImageSoftmaxEngine:[6,1,1,""]},"torchreid.engine.image.softmax.ImageSoftmaxEngine":{train:[6,3,1,""]},"torchreid.engine.image.triplet":{ImageTripletEngine:[6,1,1,""]},"torchreid.engine.image.triplet.ImageTripletEngine":{train:[6,3,1,""]},"torchreid.engine.video.softmax":{VideoSoftmaxEngine:[6,1,1,""]},"torchreid.engine.video.triplet":{VideoTripletEngine:[6,1,1,""]},"torchreid.losses":{cross_entropy_loss:[7,0,0,"-"],hard_mine_triplet_loss:[7,0,0,"-"]},"torchreid.losses.cross_entropy_loss":{CrossEntropyLoss:[7,1,1,""]},"torchreid.losses.cross_entropy_loss.CrossEntropyLoss":{forward:[7,3,1,""]},"torchreid.losses.hard_mine_triplet_loss":{TripletLoss:[7,1,1,""]},"torchreid.losses.hard_mine_triplet_loss.TripletLoss":{forward:[7,3,1,""]},"torchreid.metrics":{accuracy:[8,0,0,"-"],distance:[8,0,0,"-"],rank:[8,0,0,"-"]},"torchreid.metrics.accuracy":{accuracy:[8,4,1,""]},"torchreid.metrics.distance":{compute_distance_matrix:[8,4,1,""],cosine_distance:[8,4,1,""],euclidean_squared_distance:[8,4,1,""]},"torchreid.metrics.rank":{evaluate_rank:[8,4,1,""]},"torchreid.models":{__init__:[9,0,0,"-"]},"torchreid.models.__init__":{build_model:[9,4,1,""],show_avai_models:[9,4,1,""]},"torchreid.models.densenet":{DenseNet:[9,1,1,""]},"torchreid.models.hacnn":{HACNN:[9,1,1,""]},"torchreid.models.inceptionresnetv2":{InceptionResNetV2:[9,1,1,""]},"torchreid.models.inceptionv4":{InceptionV4:[9,1,1,""]},"torchreid.models.mlfn":{MLFN:[9,1,1,""]},"torchreid.models.mobilenetv2":{MobileNetV2:[9,1,1,""]},"torchreid.models.mudeep":{MuDeep:[9,1,1,""]},"torchreid.models.nasnet":{NASNetAMobile:[9,1,1,""]},"torchreid.models.pcb":{PCB:[9,1,1,""]},"torchreid.models.resnet":{ResNet:[9,1,1,""]},"torchreid.models.resnetmid":{ResNetMid:[9,1,1,""]},"torchreid.models.resnext":{ResNeXt:[9,1,1,""]},"torchreid.models.senet":{SENet:[9,1,1,""]},"torchreid.models.shufflenet":{ShuffleNet:[9,1,1,""]},"torchreid.models.squeezenet":{SqueezeNet:[9,1,1,""]},"torchreid.models.xception":{Xception:[9,1,1,""]},"torchreid.optim":{lr_scheduler:[10,0,0,"-"],optimizer:[10,0,0,"-"]},"torchreid.optim.lr_scheduler":{build_lr_scheduler:[10,4,1,""]},"torchreid.optim.optimizer":{build_optimizer:[10,4,1,""]},"torchreid.utils":{avgmeter:[11,0,0,"-"],loggers:[11,0,0,"-"],reidtools:[11,0,0,"-"],tools:[11,0,0,"-"],torchtools:[11,0,0,"-"]},"torchreid.utils.avgmeter":{AverageMeter:[11,1,1,""]},"torchreid.utils.loggers":{Logger:[11,1,1,""],RankLogger:[11,1,1,""]},"torchreid.utils.loggers.RankLogger":{show_summary:[11,3,1,""],write:[11,3,1,""]},"torchreid.utils.reidtools":{visualize_ranked_results:[11,4,1,""]},"torchreid.utils.tools":{check_isfile:[11,4,1,""],download_url:[11,4,1,""],mkdir_if_missing:[11,4,1,""],read_image:[11,4,1,""],read_json:[11,4,1,""],write_json:[11,4,1,""]},"torchreid.utils.torchtools":{count_num_param:[11,4,1,""],load_checkpoint:[11,4,1,""],load_pretrained_weights:[11,4,1,""],open_all_layers:[11,4,1,""],open_specified_layers:[11,4,1,""],resume_from_checkpoint:[11,4,1,""],save_checkpoint:[11,4,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"0b56ofsrvi8hubvjltzkwv2vaowm":5,"10x":8,"500k":[2,5],"50x":9,"abstract":5,"case":[2,5],"class":[5,6,7,9,11,12],"default":[2,4,5,6,7,8,9,10,11,12],"float":[5,6,7,10,11],"function":[5,6,7,8,9,10,11,12],"import":[4,5,6,7,8,9,11,12],"int":[5,6,7,8,9,10,11,12],"new":[2,5,6,10,12],"public":[2,5,9,12],"return":[5,8,9,11],"super":12,"true":[2,4,5,6,7,8,9,10,11,12],"while":[3,5,6,10,11,12],For:[4,8,12],NAS:9,Not:0,One:[0,5],Such:5,The:[2,3,6,9,12],With:7,__future__:12,__getitem__:5,__init__:[5,9,12],_extract_featur:6,_parse_data_for_ev:6,aaai:9,absolut:12,absolute_import:12,abspath:12,access:4,accordingli:2,accuraci:[9,11],accv:5,across:0,activ:[2,5],adam:[4,6,10],adam_beta1:10,adam_beta2:10,adapt:0,add:[4,5],addit:2,adopt:[2,12],advanc:4,after:11,aggreg:9,alexnet:9,all:[5,11,12],allow:10,also:[2,10,12],alter:5,analysi:[5,11],anoth:12,app:4,appear:5,appli:[7,12],approach:0,architectur:[7,9],area:5,arg:11,argument:[2,3,12],arrai:8,art:4,arxiv:[7,9],aspect:5,associ:5,asterisk:1,attent:[0,9],attribut:[2,6,10],augment:[1,5],autom:2,automat:[2,11],avail:9,averag:6,averagemet:11,avg:6,avgmet:11,avoid:12,awar:0,back:[0,12],backbon:0,background:5,base:[0,5,9,10,12],base_lr_mult:[10,12],base_width:9,baselin:[5,9],basic:12,batch:[4,5,6],batch_siz:[4,5,6,7,8,11,12],bbox_test:2,bbox_train:2,becaus:3,been:[6,12],befor:[5,7,12],begin:7,below:[2,12],benchmark:5,besid:2,best:11,beta:10,between:6,beyond:9,bilinear:5,bischof:[2,5],blob:[7,11],block:9,block_config:9,bmvc:5,bn_size:9,bodi:5,bool:[5,6,7,8,9,10,11],both:[2,4,5,6,11],bottleneck:9,bottom:0,bounding_box_test:2,bounding_box_train:2,bridg:5,build:[4,5,9,10],build_lr_schedul:[4,6,10,12],build_model:[4,6,9],build_optim:[4,6,10,12],build_train_sampl:5,build_transform:5,built:[4,10],call:[2,6],cam_a:2,cam_b:2,camera:[0,3,5,8,12],camid:[5,11,12],campu:2,can:[0,1,2,3,4,8,10,11,12],captur:[5,8],ccloi:[2,5],chang:[2,9],channel:[5,9],check:[5,11],check_before_run:5,check_isfil:11,checkpoint:[11,12],choic:[5,6],chollet:9,classic:[3,5,6,8],classif:[1,5,10,12],classifi:[10,11,12],click:1,clone:4,cluster:0,cmc:[2,6,8],code:[0,2,4,6,8,12],collect:0,color:5,color_aug:5,color_jitt:5,coloraugment:5,com:[2,4,5,7,11],combin:5,combine_al:5,combineal:[5,6,12],common:12,comparison:2,comput:[1,2,6,7,8,11],compute_distance_matrix:8,connect:9,consid:5,consist:0,consol:11,constant:10,construct:12,contain:[3,5,6,7,8,11,12],conveni:11,convolut:9,convolutionalneur:5,copi:11,correl:5,correspond:5,cosin:8,cosine_dist:8,count:[6,11,12],count_num_param:11,cpu:[5,6],creat:[2,11],crf:0,crop:5,cross:[4,7,9],cross_entropy_loss:7,crossentropyloss:7,cuda:[4,6],cuhk01:[3,4,5],cuhk03:[3,4,5,6,8,12],cuhk03_classic_split:[2,5],cuhk03_label:[2,5],cuhk03_new_protocol_config_detect:2,cuhk03_new_protocol_config_label:2,cuhk03_releas:2,cuhk:[2,5],cuhk_identif:[2,5],current:[6,9,10,11],cvpr:[5,7,9],cysu:[7,11],cython:[4,8],damag:12,dampen:10,data:[1,2,3,4,6,12],data_sourc:5,dataload:6,datamanag:[2,4,5,6,12],dataset:[6,11],dataset_:5,dataset_dir:[2,5,12],dataset_nam:[6,12],dataset_url:5,deal:11,decai:[6,10],decomposit:5,deep:[0,2,4,5,9,12],deeper:5,deepreid:5,def:12,defaul:5,default_pars:4,defens:7,defin:3,delet:2,denot:[2,7,11,12],dens:9,densenet121:9,densenet121_fc512:[1,9],densenet161:9,densenet169:9,densenet201:9,densenet:[4,9],depthwis:9,descript:5,desir:5,destin:11,detail:[2,4,6,12],detect:[2,5],determin:[10,12],develop:4,deviat:5,devic:[4,7,9],devil:9,dict:[6,11],dictionari:[6,11],differ:[2,10],digit:5,dir:4,directli:[2,3],directori:[2,4,5,6,11],dirnam:11,discrimin:5,displai:9,dist_metr:6,distanc:[6,11],distil:0,distmat:[8,11],distractor:[2,5],distractors_500k:2,distrctor:2,divid:3,divis:12,document:4,doing:2,domain:[5,9],done:[3,5,12],download:[1,2,5,11],download_dataset:5,download_url:11,downloads_qmul_ilid:[2,5],downloads_qmul_underground_reid:5,downsample_kernel_s:9,downsample_pad:9,drive:5,drop_rat:9,dropout_p:9,dst:11,duke:2,dukemtmc:[3,4,5,12],dukemtmcreid:[1,5,11,12],dukemtmcvidreid:5,each:[3,5,6,7,8,11,12],easi:[4,12],easili:12,eccv:[5,9],eccvw:5,edu:[2,5],eec:[2,5],effici:9,embed_dim:9,empti:[5,10],enabl:[2,6,8,10,12],enclos:2,end:[0,2,4,6,7,12],engin:4,entropi:[4,7],epoch:[4,6,10,11,12],epsilon:7,equal:5,equat:7,eras:5,etc:4,euclidean:[6,8],euclidean_squared_dist:8,eval_freq:[4,6,12],evalu:[2,4,5,6,8,11],evaluate_rank:8,evenli:5,everi:[6,10,11],exampl:[4,5,6,8,9,10,11,12],excit:9,exist:5,expandus:12,explicitli:5,exploit:[0,5,9],extens:4,extern:11,extra:2,extract:[2,5],extrem:9,factor:[5,10],factoris:[0,9],fail:2,fair:2,fals:[4,5,6,8,10,11,12],fc_dim:9,feat_dim:[7,9],featur:[0,4,5,6,7,8,9,11,12],few:12,fewer:9,file:[2,4,5,11],filter:5,filters_multipli:9,find:0,fine:[3,12],first:5,fix:[3,6],fixbas:6,fixbase_epoch:[6,12],folder:2,follow:[2,4],format:[1,5],forth:3,forward:7,four:[2,5],fpath:11,frac:7,frequenc:6,from:[1,2,3,6,7,8,9,11,12],frozen:[6,11,12],fusion:[5,9],g_camid:8,g_pid:8,galleri:[2,3,5,6,8,11],galleryload:6,gamma:10,gan:[0,5],gap:5,gener:[0,2,3,5,6,12],get:12,get_num_cam:5,get_num_pid:5,git:4,github:[2,4,5,7,11],give:12,given:[5,11],going:5,googl:5,gpu:[4,7,9],gradient:12,gradual:[0,5],grai:5,grid:[3,4,5],ground:[7,8],group:[0,5,9],growth_rat:9,guid:[0,2,5],hacnn:[1,4,9],handl:11,hard:[4,6,7],hard_mine_triplet_loss:7,harm:12,harmoni:[0,9],has:[3,5,6,10,12],have:[3,10,12],height:[4,5,6,12],help:2,here:[0,2,12],herman:7,hetero:0,highli:[4,8],highlight:1,hirzer:5,homogen:0,horizont:0,how:[2,5,6],howev:[2,12],html:[2,5],http:[2,4,5,7,11],huang:9,human:[0,5],iandola:9,iccv:[5,9],icg:[2,5],idea:12,ident:[3,5,6,8,9,10],identif:[0,4,5,7,9,12],ids:[3,5,12],ignor:[1,11],ilid:[3,4,5],ilidsvid:5,imag:[0,9,11,12],imagedatamanag:[2,3,4,5,6,12],imagedataset:[5,12],imagenet:5,images_detect:2,images_label:2,imagesoftmaxengin:[4,6,12],imagetripletengin:[6,12],img:5,img_path:[5,11,12],impact:9,implement:[4,6,12],improv:5,incept:[4,7,9],inceptionresnetv2:9,inceptionv4:9,includ:4,incompat:11,incred:4,index:[4,5,7],info:2,inform:5,inherit:12,init_image_dataset:5,init_video_dataset:5,initi:[2,5,10,11,12],inplan:9,input1:8,input2:8,input:[1,5,7,12],input_3x3:9,instal:8,instanc:[5,6,8,9],instanti:12,institut:[2,5],instruct:4,integ:10,intens:5,interpol:5,intuit:12,invert:9,is_best:11,jason:2,jitter:5,join:[11,12],json:[2,11],just:12,kaiyangzh:4,keep:[3,6,11,12],kei:[2,5,9,11],krizhevski:5,kroneck:0,kwarg:[5,9,12],kz303:2,label:[2,4,5,6,7,8],label_smooth:[4,6,7],larg:[5,12],last:5,last_strid:9,layer:[1,6,9,10,11],layumi:5,lead:5,learn:[0,4,5,6,9,10],learn_region:9,level:[0,9],liangzheng06:2,liangzheng:[2,5],librari:4,lid:2,lids_pedestrian:2,like:[2,12],linear:9,link:[0,2,4],list:[5,6,8,10,11,12],list_galleri:2,list_queri:2,list_train:2,list_val:2,load:[2,4,9,11,12],load_checkpoint:11,load_pretrained_weight:[11,12],log:[4,6,11,12],log_nam:11,loi:5,longtensor:[7,8],look:2,loss:[1,6,9,11,12],loss_valu:11,lr_schedul:[4,6,10],lrs:[2,5],lrschedul:6,main:4,manag:[4,12],manduchi:2,mani:5,manual:2,map:[1,2],mar:[3,4,5,6],margin:[6,7],market1501:[1,3,4,5,6,11,12],market1501_500k:[2,4,5,12],market:[2,4],master:[2,7,11],mat:2,match:[0,2,9,11],matrix:[6,7,8,11],max:[4,5,6],max_epoch:[4,6,12],max_rank:8,maximum:[6,8],mean:[1,2,5,6,8,11,12],measur:5,metadata:2,method:[2,4,10,12],metric:[2,5,6],mid:[4,9],middl:9,might:12,min:5,min_seq_len:5,mine:[4,6,7],minibatch:11,miss:[0,11],mkdir_if_miss:11,mlfn:[1,4,9],mobil:9,mobilenetv2:[4,9],mobilenetv2_1dot0:[1,9],mobilenetv2_1dot4:[1,9],mode:[2,5,12],model:[0,3,5,6,10,11],model_s:11,modifi:[2,4],modul:[4,6,9,10,11],momentum:10,more:[2,4,6,8,12],most:4,msmt17:[1,3,4,5,12],msmt17_v1:2,msmt17_v2:2,mudeep:[4,9],multi:[0,4,5,9],multi_shot:2,multi_step:10,multipl:[0,5,10,11],multipli:10,multiscal:9,must:6,mutual:0,my_model:11,name:[2,4,5,6,9,10,11,12],nasnet:[4,9],nasnetamobil:9,nchannel:9,ndarrai:[8,11],necessari:6,need:[2,4,5,6,12],neg:7,nesterov:10,net:[0,5,9,11],network:[0,5,9],neural:[5,9,11],new_dataset:[5,12],new_lay:[10,12],newdataset:[5,12],nip:5,node:5,none:[5,6,9,11],nonlinear:9,norm_mean:5,norm_std:5,normal:[0,5,7,10],note:[3,12],now:10,num_class:[4,6,7,8,9],num_galleri:[8,11],num_group:9,num_init_featur:9,num_inst:[5,6],num_queri:[8,11],num_train_cam:5,num_train_pid:[4,5,6],number:[1,5,6,7,9,11,12],numpi:[8,11],obj:11,obtain:11,offici:4,old:2,onc:0,one:[3,6,12],onli:[1,2,3,5,6,11,12],open:[6,7,11,12],open_all_lay:11,open_lay:[6,11,12],open_specified_lay:11,oper:5,optim:[4,6,9,11],option:[5,6,7,8,9,10,11],org:[2,5],organ:2,origin:[2,5],osp:[11,12],other:[3,5,11,12],otherwis:[1,2],out:4,output:[8,11],over:8,pair:5,paper:[0,4],param:1,paramet:[5,6,7,8,9,10,11],paranthes:2,parent:2,pars:[0,5],parse_data:5,parser:4,part:9,patch:5,path:[2,4,5,6,11,12],pcb:[4,9],pcb_p4:9,pcb_p6:9,penalti:10,penultimate_filt:9,peopl:[2,5],per:5,perform:[5,6,11,12],person:[0,2,4,5,7,8,9,12],pet:5,pid:[5,11,12],pil:[5,11],pipelin:6,pkuvmc:[2,5],place:[2,5],pleas:[2,3,4,6,12],png:5,pool:[6,9],pooling_method:6,pose:0,posit:7,practic:12,pre:0,predefin:[3,5],predict:[7,8],prefer:4,prepar:[2,4],prepare_split:5,present:[1,12],pretrain:[4,9,10,11,12],pretrian:11,prevent:12,prid11:[2,5],prid2011:[3,4,5],prid:[3,4,5],prid_2011:2,print:6,print_freq:[4,6,12],print_frequ:6,print_funct:12,probabl:5,probe:2,process:2,product:0,project:[2,4,5],project_mar:[2,5],project_reid:[2,5],promot:0,propag:12,protocol:[2,4],provid:[2,4,5,11],pth:[11,12],purpos:5,put:2,pyramid:0,python2:11,python3:[4,11],python:4,pytorch:4,q_camid:8,q_pid:8,qian:9,qmul:[4,5],queri:[2,3,5,6,8,11],queryload:6,rand:8,random2dtransl:[1,5],random:[0,3,5],random_eras:5,randomeras:5,randomhorizontalflip:1,randomidentitysampl:[5,6,12],randomli:[3,5,10,12],randomsampl:[5,12],rang:6,rank1:11,rank:[1,2,4,5,6,11],ranklogg:11,rate:[6,10],ratio:5,reacquisit:5,read:11,read_imag:11,read_json:11,recognit:[5,9],recommend:[6,8],record:11,reduc:7,reduced_dim:9,reduct:9,refer:[2,3,4,5,6,7,9,12],refin:9,regard:[2,12],region:5,regist:[5,12],register_image_dataset:[5,12],register_video_dataset:5,regular:[6,7],reid:[5,6,7,12],reid_evalu:5,reidentif:5,reidtool:11,relat:0,relu:9,remov:11,remove_module_from_kei:11,report:2,repres:5,represent:9,requir:[5,8],required_fil:5,research:[0,2,4,5],residu:9,resiz:5,resnet101:9,resnet152:9,resnet18:9,resnet34:9,resnet50:[1,4,6,9,11,12],resnet50_fc512:[1,9],resnet50mid:[1,9],resnet:[4,9],resnetmid:9,resnext101:9,resnext50:9,resnext50_32x4d:9,resnext50_32x4d_fc512:9,resnext:[4,9],resolut:0,resourc:0,result:[1,2,4,5,6,11],resum:11,resume_from_checkpoint:[11,12],rethink:7,retriev:[0,9],return_dataload:5,return_testdataset_by_nam:5,revisit:0,rgb:5,ristani:5,rmsprop:10,rmsprop_alpha:10,robust:0,roll:0,root:[2,4,5,6,12],run:[4,6,12],sai:[10,12],same:[3,5,12],sampl:[5,6],sample_method:5,sandler:9,save:[2,4,6,11,12],save_checkpoint:11,save_dir:[4,6,11,12],scalabl:[5,9],scale:[5,9],schedul:[4,6],scia:5,scope:12,scratch:1,script:4,se_resnet101:9,se_resnet152:9,se_resnet50:9,se_resnet50_fc512:[1,9],se_resnext101_32x4d:9,se_resnext50_32x4d:9,search:9,section:[2,12],see:[2,11,12],self:[6,12],semant:0,senet154:9,senet:[4,9],sensereid:[3,4,5],separ:9,seq_len:[5,6],sequenc:2,set:[2,3,5,6,8,12],setup:[2,4],sgd:[10,12],sgd_dampen:10,sgd_nesterov:10,shape:[5,7,8,11],share:[3,12],shot:[0,2,5,6,8],should:[2,3,5,6,8,10,12],show:[5,11],show_avai_model:[9,12],show_summari:[5,11],shuffl:0,shufflenet:[1,4,9],similar:[0,3],simpli:12,singl:[2,3,5,6,8],single_shot:2,single_step:[4,6,10],size:[1,4,5,8,9,10,11],smaller:[10,12],smooth:[4,6,7,10],soe:[2,5],softmax:[1,4,6,9,11],some:[2,12],some_argu:6,someth:0,sourc:[2,4,5,6,7,8,9,10,11,12],spatial:0,specif:[2,5,12],specifi:[1,2,8,11,12],speed:8,spindl:5,split:[2,3,5,6,8],split_id:[3,5],splits_classic_detect:2,splits_classic_label:2,splits_new_detect:2,splits_new_label:2,splits_prid2011:2,squar:8,squeez:9,squeezenet1_0:9,squeezenet1_0_fc512:[1,9],squeezenet1_1:9,squeezenet:[4,9],staged_lr:[10,12],standard:[2,4,5],start:[3,6],start_epoch:[6,11,12],start_ev:6,state:[4,11],state_dict:11,statist:5,stdout:11,stem_filt:9,step:[10,11],stepsiz:[4,6,10],stepwis:[0,5],store:[2,11],str:[5,6,8,9,10,11,12],strategi:12,string:5,strip:9,strong:9,structur:2,style:0,sub:3,subclass:[5,6],submit:0,subset:12,suggest:[2,12],suit:6,summar:11,summari:11,sun:9,superscript:2,support:[2,4,9,10,11],suppos:[2,12],sys:[11,12],szegedi:[7,9],take:[5,10],tar:[11,12],target:[0,5,6,7,8,11,12],team:[2,5],techniqu:4,templat:12,tempor:0,tensor:[7,8],test:[2,3,4,5,6,11],test_galleri:2,test_onli:[4,6,12],test_prob:2,testload:[5,6],text:11,tgz:2,than:[2,8],them:2,thi:[2,4,5,6,8,11,12],three:12,threshold:2,thu:[3,5],time:[3,6,7],top:[6,8,11,12],topk:[8,11],torch:[6,7,8],torchreid:[2,3,12],torchtool:11,torchvis:4,total:3,track:[0,5],tracklet:[5,6],train:[0,1,2,3,4,5,6,9,10,11],train_sampl:[5,6,12],trainload:[5,6],transfer:[5,9],transform:9,translat:5,tree:2,triplet:[4,6,9,12],tripletloss:7,truth:[7,8],tugraz:[2,5],tune:12,tupl:[5,8,11,12],two:[2,3,5],txt:2,type:[8,11],typic:12,ucsc:[2,5],under:[2,3,8,12],underground_reid:2,unicodedecodeerror:11,unifi:6,unknown:[0,5],unlabel:5,unless:1,unmatch:11,unsupervis:0,unzip:2,updat:11,url:[5,11],use:[2,5,6,7,8,9,10,12],use_cpu:[5,6],use_cython:8,use_gpu:[7,9],use_metric_cuhk03:[2,6,8],used:[1,2,3,4,5,6,12],user:2,uses:10,using:[2,3,4,6,8,11,12],util:12,v15:2,valu:[5,8,10,11],vari:3,verbos:5,version:[5,9],via:[0,4],vid:[3,4,5],vid_reid_dataset:[2,5],video:[0,11,12],videodatamanag:[3,5,6],videodataset:[5,12],videoreid:[3,4,5],videosoftmaxengin:[6,12],videotripletengin:[6,12],vidreid:2,view:[3,5,8],viper:[3,4,5],vision:[2,5,7],visrank:[6,12],visrank_topk:[6,12],visual:[4,6,11],visualize_ranked_result:11,vitro:5,wai:2,walk:0,wang:5,wanna:[2,4],want:[10,12],wei:5,weight:[1,6,7,9,10,11],weight_decai:10,weight_path:[11,12],weight_t:6,weight_x:6,welcom:0,well:11,what:[2,12],whatev:12,when:[1,2,6,7,8,10,12],where:[5,7,12],whether:[6,7,9,11],which:[2,6,8,11,12],whose:2,width:[4,5,6,9,12],width_mult:9,within:12,without:4,worker:5,would:12,wrapper:[8,9,10],write:[11,12],write_json:11,www:[2,5],xception:[4,9],xgwang:[2,5],xiatian:[2,5],xie:9,you:[0,2,4,10,11,12],your:4,yourself:2,zhang:9,zhao:5,zheng:5,zhong:5,zhunzhong07:5,zip:2,zoph:9},titles:["Awesome-ReID","Model Zoo","Datasets","Evaluation","Torchreid","torchreid.data","torchreid.engine","torchreid.losses","torchreid.metrics","torchreid.models","torchreid.optim","torchreid.utils","How-to"],titleterms:{"new":4,Use:12,aaai:0,accuraci:8,arxiv:0,avail:12,averag:11,awesom:0,base:6,chang:12,choos:12,citat:4,classif:[4,9],combin:12,confer:0,cross:12,cuhk01:2,cuhk03:2,cvpr:0,dagger:2,data:5,dataset:[2,4,5,12],design:12,differ:12,distanc:8,dukemtmc:2,dukemtmcreid:2,dukemtmcvidreid:2,eccv:0,engin:[6,12],evalu:[3,12],find:12,galleri:12,gener:11,get:4,grid:2,how:12,ilid:2,ilidsvid:2,imag:[2,3,4,5,6],imagenet:[4,9],indic:4,instal:4,interfac:[4,9],kei:12,layer:12,learn:12,lightweight:[4,9],logger:11,loss:[4,7],lr_schedul:12,manag:5,mar:2,market1501:2,meter:11,metric:8,model:[1,4,9,12],msmt17:2,multipl:12,neurip:0,optim:[10,12],own:12,prid2011:2,prid:2,qmul:2,queri:12,rank:[8,12],rate:12,reid:[0,2,3,4,9,11],result:12,resum:12,sampler:[5,12],schedul:10,second:4,sensereid:2,show:12,softmax:7,specif:[4,9],start:4,step:12,tabl:4,test:12,tool:11,torch:11,torchreid:[4,5,6,7,8,9,10,11],train:12,transfer:12,transform:5,triplet:7,two:12,unifi:4,util:11,vid:2,video:[2,3,4,5,6],videoreid:2,viper:2,visual:12,your:12,zoo:1}})