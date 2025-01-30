using System.Text.Json.Serialization;

namespace SHD_BankAccount_Transaction.Server.Models
{
    public class modify_info
    {
        [JsonIgnore]
        public bool is_deleted { get; set; }

        [JsonIgnore]
        public DateTime created_time { get; set; }

        [JsonIgnore]
        public int created_user_id { get; set; }

        [JsonIgnore]
        public DateTime last_modified_time { get; set; }

        [JsonIgnore]
        public int last_modified_user_id { get; set; }

        /// <summary>
        /// Set thông tin người thêm, thời gian thêm record này
        /// </summary>
        /// <param name="UserID"></param>
        public void SetInsertInfo(int created_user_id)
        {
            this.is_deleted = false;
            this.created_user_id = this.last_modified_user_id = created_user_id;
            this.created_time = this.last_modified_time = DateTime.Now;
        }

        /// <summary>
        /// Set thông tin người sửa, thời gian sửa của record này
        /// </summary>
        /// <param name="UserID"></param>
        public void SetUpdateInfo(int last_modified_user_id)
        {
            this.last_modified_user_id = last_modified_user_id;
            this.last_modified_time = DateTime.Now;
        }
    }
}