#-*- coding:utf-8 -*-
import requests
import sys
import json

from konlpy.utils import pprint
def main(argv):
    req = requests.get('http://dart.fss.or.kr/api/company.json?&auth=c4d5a917479d1e30258be15691e79bc73edefbeb&crp_cd='+argv[1])
    data = json.loads(req.content.decode('utf-8'))
    print(data['bsn_no'])
    print(data['hm_url'])
    print(data['phn_no'])
    print(data['est_dt'])
    print(data['stock_cd'])
    return data
if __name__ =='__main__':
    main(sys.argv)