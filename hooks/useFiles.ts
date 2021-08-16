import * as FileSystem from 'expo-file-system'

export const useFiles = async (filetype: string) => {
  if (!filetype) {
    return undefined
  }

  let base = FileSystem.documentDirectory || ''
  let fs = FileSystem.readDirectoryAsync(base)

  let result = await fs.then((files) => {
    let audioFiles = files.filter((file) => file.includes(filetype))
    return audioFiles
  })

  return result
}
