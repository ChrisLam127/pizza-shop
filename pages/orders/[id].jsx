import Image from "next/image";
import React from "react";
import styles from "../../styles/Order.module.css";

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.unDone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>1234567</span>
              </td>
              <td>
                <span className={styles.name}>Christian Lambo</span>
              </td>
              <td>
                <span className={styles.address}>574, Jacob Street</span>
              </td>
              <td>
                <span className={styles.total}>$39.99</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="" width={30} height={30} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                className={styles.icons}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" alt="" width={30} height={30} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                className={styles.icons}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" alt="" width={30} height={30} />
            <span>On The Way</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                className={styles.icons}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" alt="" width={30} height={30} />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                className={styles.icons}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totlaText}>
            <b className={styles.totalTextTitle}> Subtotal: </b> $79.60
          </div>
          <div className={styles.totlaText}>
            <b className={styles.totalTextTitle}> Discount: </b> $0.00
          </div>
          <div className={styles.totlaText}>
            <b className={styles.totalTextTitle}> Total: </b> $79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
