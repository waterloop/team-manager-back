import File from '../models/file'
import BaseModelService from './base/modelService'
import { PositionLevel } from '../types'

class FileService extends BaseModelService<File> {

  joinAllDefinition = {
    alias: 'file',
    leftJoinAndSelect: {
      user: 'file.user',
      team: 'file.team'
    }
  }

  constructor () {
    super(File)
  }
}

export default new FileService()