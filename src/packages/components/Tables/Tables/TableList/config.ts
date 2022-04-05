import { publicConfig } from '@/packages/public'
import { CreateComponentType } from '@/packages/index.d'
import { TableListConfig } from './index'
import cloneDeep from 'lodash/cloneDeep'
import dataJson from './data.json'

export const option = {
  // 数据
  dataset: dataJson,
  // 表行数
  rowNum: 5,
  // 轮播时间
  waitTime: 2,
  // 数值单位
  unit: '',
  // 自动排序
  sort: true,
  color: '#1370fb',
  textColor: '#CDD2F8FF',
  borderColor: '#1370fb80',
  carousel: 'single',
  // 格式化
  valueFormatter(item: { value: any}) { return item.value}
}

export default class Config extends publicConfig implements CreateComponentType {
  public key = TableListConfig.key
  public chartConfig = cloneDeep(TableListConfig)
  public option = cloneDeep(option)
}
