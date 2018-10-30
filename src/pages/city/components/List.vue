<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">上海</div>
        </div>
        <div class="button-wrapper">
          <div class="button">深圳</div>
        </div>
        <div class="button-wrapper">
          <div class="button">广州</div>
        </div>
        <div class="button-wrapper">
          <div class="button">西安</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
        <div class="item border-bottom">阿拉善</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .border-topbottom,.border-bottom{
    &:before,&:after{
      border-color: #ccc;
    }
  }
  .list{
    overflow: hidden;
    position: absolute;
    top: rem(79);
    left: 0;
    right: 0;
    bottom: 0;
    .area{
      .title{
        line-height: rem(18);
        font-size: rem(13);
        padding-left: rem(8);
        background-color: #eee;
        color: #666;
      }
      .button-list{
        padding: rem(5) rem(30) rem(5) rem(5);
        overflow: hidden;
        .border{
          &:before,&:after{
            border-color: #ccc;
          }
        }
        .button-wrapper{
          float: left;
          width: 33.3%;
          .button{
            text-align: center;
            margin: rem(5);
            padding: rem(5) 0;
            font-size: rem(15);
            border: rem(1) solid #ccc;
            border-radius: rem(4);
          }
        }
      }
      .item-list{
        .item{
          line-height: rem(37);
          font-size: rem(16);
          color: #666;
          padding-left: rem(8);
        }
      }
    }
  }
</style>
