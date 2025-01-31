using System.Text.Json.Serialization;

namespace SHD_BankAccount_Transaction.Server.Models
{
    public class ModifyInfo
    {
        [JsonIgnore]
        public bool IsDeleted { get; set; }

        [JsonIgnore]
        public DateTime CreatedTime { get; set; }

        [JsonIgnore]
        public int CreatedUserId { get; set; }

        [JsonIgnore]
        public DateTime LastModifiedTime { get; set; }

        [JsonIgnore]
        public int LastModifiedUserId { get; set; }

        /// <summary>
        /// Set thông tin người thêm, thời gian thêm record này
        /// </summary>
        /// <param name="UserID"></param>
        public void SetInsertInfo(int created_user_id)
        {
            this.IsDeleted = false;
            this.CreatedUserId = this.LastModifiedUserId = created_user_id;
            this.CreatedTime = this.LastModifiedTime = DateTime.Now;
        }

        /// <summary>
        /// Set thông tin người sửa, thời gian sửa của record này
        /// </summary>
        /// <param name="UserID"></param>
        public void SetUpdateInfo(int last_modified_user_id)
        {
            this.LastModifiedUserId = last_modified_user_id;
            this.LastModifiedTime = DateTime.Now;
        }
    }
}