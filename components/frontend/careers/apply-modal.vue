<template>
  <modal id="style-3" :name="applyNowModal">
    <div class="pt-3 pb-4">
      <div class="text-end pe-2"><button class="apply-now-close-btn text-brand" @click="closeApplyNowModal"><i class="fa-solid fa-circle-xmark"></i></button></div>
      <h4 class="text-brand text-center fw-bold" style="margin-top:-20px;">Apply Now</h4>
      <div class="px-sm-4 px-2 pt-2 basic-form">
        <div class="mb-3">
          <label for="">Applicant name</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter applicant name">
        </div>
        <div class="mb-3">
          <label for="">Contact number</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter contact number">
        </div>
        <div class="mb-3">
          <label for="">Email</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter email address">
        </div>
        <div class="mb-3">
          <label for="">LinkedIn URL</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter LinkedIn URL">
        </div>
        <div class="mb-3">
          <label for="">Twitter URL</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter Twitter URL">
        </div>
        <div class="mb-3">
          <label for="">GitHub URL</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter GitHub URL">
        </div>
        <div class="mb-3">
          <label for="">Portfolio URL</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter Portfolio URL">
        </div>
        <div class="mb-3">
          <label for="">Other website</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter website URL">
        </div>
        <div class="mb-4">
          <label for="">Application</label>
          <textarea rows="5" class="form-control placeholder-font" placeholder="Your cover letter/message sent to the employer"></textarea>
        </div>
        <div class="file-upload-content">
          <label>Resume upload</label>
          <div class="form-group custom-drop-file">
            <input type="file" class="form-control">
            <div class="d-flex align-items-center">
              <span class="text-brand file-upload-icon d-block"><i class="fa-solid fa-file-arrow-up"></i></span>
              <span class="d-block ps-2">Attach resume/CV</span>
            </div>
          </div>
        </div>
        <small class="text-gray">Maximum upload file size: 12 MB (PDF only)</small>
        <button class="rounded-fill-btn rounded-0 w-100 py-1 my-3">Apply now</button>
      </div>
    </div>
  </modal>
</template>

<script>
    export default {
        name: 'ApplyModal',
        props: ['apply-now-modal', 'close-apply-now-modal']
    }
</script>

<style scoped>

.apply-now-close-btn {
  padding: 0;
  border: none;
  outline: none;
  line-height: 0;
  font-size: 25px;
  background: none;
}

.apply-now-close-btn:hover {
  color: var(--lime);
  transition: all 0.3s ease;
}

.custom-drop-file {
  position: relative;
  padding: 8px;
  background-color: rgba(164, 164, 164, 0.2);
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
}

.custom-drop-file input {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
}

.custom-drop-file p {
  margin: 0;
  color: #a4a4a4;
}

.file-upload-icon {
  line-height: 0;
  font-size: 18px;
}
</style>