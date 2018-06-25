<template>
    <div>
      <Upload action="/api/art/save"  :on-success="uploadSuccess" :on-error="uploadError">
        <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
      </Upload>
    </div>
</template>

<script>
    export default {
        name: "perfive",
      data(){
          return{

          }
      },
      methods:{
        uploadSuccess(){
          //console.log(response) // 后端返回数据
          console.log(file)   // 当前上传文件
          console.log(fileList) // 整个input file 里的文件数组
        },
        uploadError(){
          console.log(file)   // 当前上传文件
        }
      },

    }
</script>

<style scoped>

</style>
